/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

export default function Home() {
  const showModal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#stateModal", {});
    myModal.show();
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
          <div className="storm_main">
            <div className="storm_title">STORM Staking Statistics</div>
            <div className="statistics">
              <div className="item">
                <div className="tit">Current Staking</div>
                <div className="value">5015.53m STM</div>
              </div>
              <div className="item">
                <div className="tit">APY</div>
                <div className="value">110.83 %</div>
              </div>
            </div>
          </div>
          <div className="column d-flex justify-content-center position-relative">
            <div className="storm_main">
              <div className="storm_title d-flex align-items-center">
                <img className="mini-storm" src="Storm_150x150.png" alt="" />
                Stake STM
              </div>
              <div className="operate">
                <div className="stake-info w-100">
                  <div className="d-flex justify-content-between">
                    <p>APY</p>
                    <p className="fw-bold">12.98%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Available</p>
                    <p className="fw-bold">0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>My Stakings</p>
                    <p className="fw-bold">0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Pending Rewards</p>
                    <p className="fw-bold">0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Multiplier</p>
                    <p className="fw-bold">0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>TVL</p>
                    <p className="fw-bold">39.48%</p>
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
                      <h1 className="modal-title fs-5" id="stateModalLabel">
                        Stake <span className="fw-bold">STM</span>
                      </h1>
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
                            type="text"
                            placeholder="0"
                            className="form-control stakeAmount me-2 w-100"
                          />
                          <button className="btn btn-secondary">MAX</button>
                        </div>

                        <div className="d-flex justify-content-around my-3">
                          <button className="btn btn-primary">STAKE</button>
                          <button className="btn btn-primary">UNSTAKE</button>
                        </div>
                        <div className="d-flex justify-content-center mb-1">
                          <button className="btn btn-success">
                            Auto Compound
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-around text-center">
                      {/* Stake Info */}
                      <div className="d-flex flex-column">
                        <p>Your Stakings</p>
                        <p>0.00</p>
                      </div>
                      <div className="d-flex flex-column">
                        <p>Your Earnings</p>
                        <p>0.00</p>
                      </div>
                      <div className="d-flex flex-column">
                        <p>Wallet Balance</p>
                        <p>0.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="column">
            <div className="hold_main">
              <div className="storm_title">Total Dividends</div>
              <div className="operate">
                <div className="coin">
                  <img className="img54" src="Storm_150x150.png" alt="" />
                </div>
                <div className="money">0 STM</div>
              </div>
            </div>
            <div className="hold_main">
              <div className="storm_title">Pending Rewards</div>
              <div className="operate">
                <div className="coin">
                  <img className="img54" src="Storm_150x150.png" alt="" />
                </div>
                <div className="money">0 STM</div>
                <div className="storm_btns">
                  <a href="" className="disable">
                    <span>Claim Rewards</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="hold_main">
              <div className="storm_title">STORM in Wallet</div>
              <div className="operate">
                <div className="coin">
                  <img className="img54" src="Storm_150x150.png" alt="" />
                </div>
                <div className="money">0 STM</div>
              </div>
            </div>
            <div className="hold_main">
              <div className="storm_title">Total STORM Earned</div>
              <div className="operate">
                <div className="coin">
                  <img className="img54" src="Storm_150x150.png" alt="" />
                </div>
                <div className="money">0 STM</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
