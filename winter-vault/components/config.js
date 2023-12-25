import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import tokenABI from "./erc20abi.json";
import stormStakeABI from "./stormStakeABI.json";
import { ethers } from "ethers";

const stormStakeAddr = "0x29cc28f60F5405Ffd7949DDf4FB698b4427223ab";

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
  const rewardPerTokenRaw = poolInfo[3].toString();
  const rewardPerToken = Number(
    await convertToEth("reward", rewardPerTokenRaw)
  );
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
  const userReward = Number(await convertToEth("reward", userRewardRaw));
  const userStaked = Number(
    await convertToEth("reward", userStakedArray["amount"].toString())
  );
  // Calculate the APY in percentage, the result should be a percentage
  // Calculate the rate per period (r)
  // Assuming rewardPerToken is per year and we want to compound semi-annually
  const n = 2; // Compounding periods per year
  const totalStaked = parseFloat(tokenBalances.pool);
  const r = totalStaked > 0 ? rewardPerToken / totalStaked / n : 0;

  // Calculate the APY using the formula
  const apy = totalStaked > 0 ? ((1 + r) ** n - 1) * 100 : 0;

  const poolStats = {
    totalStaked: tokenBalances.pool,
    apy: apy.toFixed(2),
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
