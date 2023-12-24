/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

export default function Home() {
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
          <div className="column">
            <div className="storm_main">
              <div className="storm_title">My Staking</div>
              <div className="operate">
                <div className="coin">
                  <img className="img54" src="Storm_150x150.png" alt="" />
                </div>
                <div className="money">0 STM</div>
                <div className="storm_btns">
                  <a href="" className="disable">
                    <span>Start Staking</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="storm_main">
              <div className="storm_title">My Reward</div>
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
