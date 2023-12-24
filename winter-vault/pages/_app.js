/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import "./main.scss";
import "../styles/base.css";
import "../styles/responsive.css";
import Link from "next/link";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add bootstrap js
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    // Remove the default stylesheet
    const styles = document.querySelector("#stitches");

    if (styles) {
      styles.remove();
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Stake & Hold Storm" />
        <meta
          name="description"
          content="Reward Dashboard for STORM Stakers and Holders."
        />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vault.winterstorm.finance" />
        <meta property="og:title" content="Stake & Hold Storm" />
        <meta
          property="og:description"
          content="Reward Dashboard for STORM Stakers and Holders."
        />
        <meta
          property="og:image"
          content="https://vault.winterstorm.finance/static/images/logo_with_words.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://vault.winterstorm.finance"
        />
        <meta property="twitter:title" content="Stake Storm" />
        <meta
          property="twitter:description"
          content="Winter is here, the Storm is upon us."
        />
        <meta
          property="twitter:image"
          content="https://vault.winterstorm.finance/static/images/logo_with_words.png"
        />
      </Head>
      <div id="wrapper" style={{ marpaginBottom: "4%" }}>
        {/* Navbar */}

        <div id="menu" className="our_nav">
          <div className="nav_inner">
            <nav className="storm-navbar">
              <div className="d-flex">
                <ul className="logo_container">
                  <li>
                    <div className="font_extrabold text_xl">
                      <Link href="https://winterstorm.finance">
                        <span className="logo">
                          <span className="logo_image">
                            <img src="logo_with_word.svg" alt="" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <span className="primary_links">
                <ul className="menu_right">
                  <li>
                    <a href="https://winterstorm.finance/#about">
                      about<span className="fillerTxt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://winterstorm.finance/#tokenomics">
                      TOKENOMICS
                    </a>
                  </li>
                  <li>
                    <a href="https://winterstorm.finance/#roadmap">
                      ROAD MAP<span className="fillerTxt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://winterstorm.finance/#community">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.winterstorm.finance/" target="_blank">
                      WHITEPAPER
                    </a>
                  </li>
                </ul>
              </span>
            </nav>
            <div className="d-flex justify-content-around">
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-success btn-sm"
                  style={{
                    borderRadius: "16px",
                    whiteSpace: "nowrap",
                    background: "linear-gradient(270deg, #11d617, #0752bb)",
                  }}
                  id="connectWallet"
                >
                  Connect Wallet
                </button>
              </div>
              <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>Menu</span>
              </div>
            </div>
          </div>
        </div>

        <Component {...pageProps} />
      </div>

      <footer className="footer">
        {/* Subscribe Form */}
        <section id="subscribe" className="subscribe_section global_outer">
          <div className="subscribe_global_inner global_inner">
            <div className="subscribe_content">
              <h2 id="community" style={{ fontFamily: "Iceberg" }}>
                Join The Community!
              </h2>
              <p style={{ fontFamily: "Iceberg" }}>
                Follow us on our Official Channels to never miss important
                updates and announcements!
              </p>
              <div>
                <ul>
                  <div className="footer_link_social">
                    <div className="social_icon_list flex flex_wrap justify_center mt_3">
                      <a
                        target="_blank"
                        href="https://discord.com/invite/ZBcywm82S6"
                      >
                        <img src="discord.png" alt="" />
                      </a>
                      <a target="_blank" href="https://t.me/Winter_Storm">
                        <img src="telegram.png" alt="" />
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/intent/follow?screen_name=WinterStorm_Fi"
                      >
                        <img src="x1.png" alt="" />
                      </a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <section className="footer_copyright global_outer">
          <div className="footer_copyright_inner global_inner">
            <div className="legal_links">
              <ul>
                <div className="footer_community_social">
                  <h2>Join us on:</h2>
                  <div className="social_icon_list flex flex_wrap justify_center mt_3">
                    <a
                      target="_blank"
                      href="https://discord.com/invite/ZBcywm82S6"
                    >
                      <img src="discord.png" alt="" />
                    </a>
                    <a target="_blank" href="https://t.me/Winter_Storm">
                      <img src="telegram.png" alt="" />
                    </a>
                    <a
                      target="_blank"
                      href="https://twitter.com/intent/follow?screen_name=WinterStorm_Fi"
                    >
                      <img src="x1.png" alt="" />
                    </a>
                  </div>
                </div>
              </ul>
            </div>
            <div
              className="copyright"
              style={{ paddingTop: "4%", color: "#fff" }}
            >
              &copy; Copyright 2023-2025 Winter Storm. All Rights Reserved.
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
