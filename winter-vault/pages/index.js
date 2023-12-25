/* eslint-disable @next/next/no-img-element */
import {
  action,
  autoCompound,
  getHolderDetails,
  getPoolDetails,
} from "@/components/config";
import Head from "next/head";
import { useEffect, useState } from "react";

// TODO: Implement shimmer loading
// TODO: Disable buttons for user that is not connnected or invalid inputValue

export default function Home() {
  const [poolInfo, setPoolInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [holderInfo, setHolderInfo] = useState({});

  useEffect(() => {
    getInterfaceInfo();
  }, []);

  useEffect(() => {
    // check if poolInfo is empty
    if (Object.keys(poolInfo).length !== 0) {
      setLoading(false);
    }
  }, [poolInfo]);

  const getInterfaceInfo = async () => {
    setInterval(async () => {
      const poolInfo = await getPoolDetails();
      const holderInfo = await getHolderDetails();
      setPoolInfo(poolInfo);
      setHolderInfo(holderInfo);
    }, 3000);
  };

  const showModal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#stateModal", {});
    myModal.show();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setError("Input is empty");
    } else if (Number(value) > poolInfo.userBalance) {
      setError("Insufficient balance");
    } else {
      setError("");
    }
    setInputValue(value);
  };

  const stake = async (tokenAddress) => {
    const amount = document.querySelector("#stakeAmount").value;
    const result = await action("stake", amount, tokenAddress);
    if (result) {
      const output = "Stake successful!";
      document.querySelector("#result").innerHTML = output;
    }
  };

  const unstake = async (tokenAddress) => {
    const amount = document.querySelector("#stakeAmount").value;
    const result = await action("unstake", amount, tokenAddress);
    if (result) {
      const output = "Unstaked successfully!";
      document.querySelector("#result").innerHTML = output;
    }
  };

  return (
    <>
      <Head>
        <title>Stake & Hold Storm</title>
      </Head>

      {/* Page Content */}
      <main className="content">
        <section className="roadmap">
          <div className="roadmap-title">
            <div className="con">
              <div className="desc">
                <h2 className="pc">Storm Stake</h2>
                <p className="p">
                  Staking of the people, by the people and for the people.
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="d-flex display-4 text-light justify-content-center align-items-center">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="column d-flex justify-content-center position-relative">
              <div className="storm_main">
                <div className="storm_title d-flex align-items-center">
                  <img className="mini-storm" src="Storm_150x150.png" alt="" />
                  Stake STM to Earn STM
                </div>
                <div className="operate">
                  <div className="stake-info w-100">
                    <div className="d-flex justify-content-between">
                      <p>Reward Per Token</p>
                      <p className="fw-bold">{poolInfo.rewardPerToken}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Available $STM</p>
                      <p className="fw-bold">{poolInfo.userBalance}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>My Stakings</p>
                      <p className="fw-bold">{poolInfo.userStaked}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Pending Rewards</p>
                      <p className="fw-bold">{poolInfo.reward}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Multiplier</p>
                      <p className="fw-bold">{poolInfo.multiplier}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Total Staked</p>
                      <p className="fw-bold">{poolInfo.totalStaked}</p>
                    </div>
                  </div>

                  <div className="storm_btns mt-3">
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#stateModal"
                    >
                      Open Pool
                    </button>
                    <a
                      href=""
                      className="btn btn-outline-primary text-primary"
                      style={{ background: "transparent" }}
                    >
                      GET STM
                    </a>
                  </div>
                </div>

                {/* STM/STM modal */}
                <div
                  className="modal fade"
                  id="stateModal"
                  tabIndex="-1"
                  aria-labelledby="stateModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div className="modal-title d-flex">
                          <h1 className="fs-5" id="stateModalLabel">
                            Stake <span className="fw-bold">STM</span>
                          </h1>
                          <p className="ms-5" id="result"></p>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex flex-column">
                          <div className="d-flex">
                            <input
                              type="number"
                              placeholder="0"
                              className={`form-control stake-amount me-2 w-100 ${
                                error ? "text-danger border border-danger" : ""
                              }`}
                              id="stakeAmount"
                              value={inputValue}
                              onChange={handleInputChange}
                            />
                            <button
                              className="btn btn-secondary"
                              onClick={() =>
                                setInputValue(poolInfo.userBalance)
                              }
                            >
                              MAX
                            </button>
                          </div>
                          {error && <div className="text-danger">{error}</div>}

                          <div className="d-flex justify-content-around my-3">
                            <button
                              className="btn btn-primary"
                              onClick={() => stake(poolInfo.tokenAddress)}
                            >
                              STAKE
                            </button>
                            <button
                              className="btn btn-primary"
                              onClick={() => unstake(poolInfo.tokenAddress)}
                            >
                              UNSTAKE
                            </button>
                          </div>
                          <div className="d-flex justify-content-center mb-1">
                            <button
                              onClick={autoCompound}
                              className="btn btn-success"
                            >
                              Auto Compound
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-around text-center">
                        {/* Stake Info */}
                        <div className="d-flex flex-column">
                          <p>Your Stakings</p>
                          <p>{poolInfo.userStaked}</p>
                        </div>
                        <div className="d-flex flex-column">
                          <p>Your Earnings</p>
                          <p>{poolInfo.reward}</p>
                        </div>
                        <div className="d-flex flex-column">
                          <p>Wallet Balance</p>
                          <p>{poolInfo.userBalance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="roadmap-title">
            <div className="con">
              <div className="desc">
                <h2 className="pc" style={{ marginTop: "100px" }}>
                  Storm Hold
                </h2>
                <p className="p">Storm Holders reward panel.</p>
              </div>
            </div>
          </div>
          <div className="column d-flex justify-content-center">
            {loading ? (
              <div className="d-flex display-4 text-light justify-content-center align-items-center">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="storm_main">
                <div className="storm_title d-flex align-items-center">
                  <img className="mini-storm" src="Storm_150x150.png" alt="" />
                  Hold STM to Earn STM
                </div>
                <div className="operate">
                  <div className="stake-info w-100">
                    <div className="d-flex justify-content-between">
                      <p>Reward Per Day</p>
                      <p className="fw-bold">{holderInfo.rewardPerDay} STM</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Pending Rewards</p>
                      <p className="fw-bold">{holderInfo.pendingRewards} STM</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Total Earnings</p>
                      <p className="fw-bold">{holderInfo.totalEarnings} STM</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>$STM in Wallet</p>
                      <p className="fw-bold">{poolInfo.userBalance} STM</p>
                    </div>
                  </div>

                  <div className="storm_btns mt-3">
                    <button
                      className="btn btn-primary"
                      onClick={getHolderDetails}
                    >
                      Claim Rewards
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
