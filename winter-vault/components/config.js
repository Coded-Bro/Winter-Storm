import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import tokenABI from "./erc20abi.json";
import stormStakeABI from "./stormStakeABI.json";
import holderBonusABI from "./holderBonusABI.json";
import { ethers } from "ethers";

const stormStakeAddr = "0x29cc28f60F5405Ffd7949DDf4FB698b4427223ab";

const holderBonusAddr = "0x73c29475088b472d5ecc98bcd52e7f25db2939ff";

const web3Provider = async () => {
  const [account] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const client = createWalletClient({
    account,
    chain: sepolia,
    transport: custom(window.ethereum),
  });

  return client;
};

const convertToEth = async (type, value) => {
  if (type === "reward") {
    // Covert Szabo to ether
    return Number(ethers.utils.formatEther(value)).toFixed(8);
  } else {
    // Convert from Wei to ether
    return Number(ethers.utils.formatEther(value)).toFixed(2);
  }
};

const convertToWei = async (value) => {
  return ethers.utils.parseEther(value);
};

export async function connectWallet() {
  const connection = await web3Provider();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const stormStakeContract = new ethers.Contract(
    stormStakeAddr,
    stormStakeABI,
    signer
  );

  return { connection, signer, stormStakeContract };
}

export const fetchTokenBalance = async (tokenAddress, userWalletAddress) => {
  const { signer } = await connectWallet();
  const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
  const poolBalance = await tokenContract.balanceOf(stormStakeAddr);
  const pool = await convertToEth(null, poolBalance);
  const userBalance = await tokenContract.balanceOf(userWalletAddress);
  const user = await convertToEth(null, userBalance);

  return { pool, user };
};

export const getPoolDetails = async () => {
  const { connection, stormStakeContract } = await connectWallet();
  const userWalletAddress = connection?.account?.address;
  const poolInfo = await stormStakeContract?.poolInfo(0);
  const poolId = 0;
  const tokenAddress = poolInfo[poolId];
  const rewardPerToken = poolInfo[3].toString();
  const tokenBalances = await fetchTokenBalance(
    tokenAddress,
    userWalletAddress
  );
  const userStakedArray = await stormStakeContract?.userInfo(
    poolId,
    userWalletAddress
  );
  const userRewardRaw = (
    await stormStakeContract?.pendingReward(poolId, userWalletAddress)
  ).toString();
  const bonusMultiplier = (
    await stormStakeContract?.BONUS_MULTIPLIER()
  ).toString();
  const userReward = Number(
    await convertToEth("reward", userRewardRaw)
  ).toFixed("2");
  const userStaked = Number(
    await convertToEth("reward", userStakedArray["amount"].toString())
  );

  const poolStats = {
    totalStaked: tokenBalances.pool,
    rewardPerToken: rewardPerToken,
    userStaked: userStaked,
    reward: userReward,
    multiplier: bonusMultiplier,
    userBalance: tokenBalances.user,
    tokenAddress: tokenAddress,
  };

  return poolStats;
};

export const action = async (action, amount, tokenAddress) => {
  try {
    const amountToWei = (await convertToWei(amount)).toString();
    const { stormStakeContract, signer } = await connectWallet();
    if (action === "unstake") {
      const result = await stormStakeContract
        ?.unstake(0, amountToWei)
        .then((_) => true);
      return result;
    } else {
      const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
      const approveTransfer = await tokenContract.approve(
        stormStakeAddr,
        amountToWei
      );
      const waitApproval = approveTransfer.wait();
      if (waitApproval) {
        const result = await stormStakeContract
          ?.stake(0, amountToWei)
          .then((_) => true);
        return result;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const autoCompound = async () => {
  const { stormStakeContract } = await connectWallet();

  try {
    const result = await stormStakeContract?.autoCompound().then((_) => true);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getHolderDetails = async () => {
  const { signer, connection } = await connectWallet();
  const userWalletAddress = connection?.account?.address;
  const holderContract = new ethers.Contract(
    holderBonusAddr,
    holderBonusABI,
    signer
  );

  const holderInfo = await holderContract?.getUserView(userWalletAddress);

  const holderStats = {
    rewardPerDay: Number(
      await convertToEth(null, holderInfo[0].toString())
    ).toFixed("2"),
    pendingRewards: Number(
      await convertToEth(null, holderInfo[2].toString())
    ).toFixed("2"),
    totalEarnings: Number(
      await convertToEth(null, holderInfo[3].toString())
    ).toFixed("2"),
  };

  return holderStats;
};
