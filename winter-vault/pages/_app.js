/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/base.css";
import "../styles/responsive.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add bootstrap js
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <div id="wrapper" style={{ marginBottom: "4%" }}>
        {/* Navbar */}

        <div id="menu" className="our_nav">
          <div className="nav_inner">
            <nav className="storm-navbar">
              <ul className="logo_container">
                <li>
                  <div className="font_extrabold text_xl">
                    <Link href="/">
                      <span className="logo">
                        <span className="logo_image">
                          <img src="logo_with_word.svg" alt="" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>

              <span className="primary_links">
                <ul className="menu_hero">
                  <li className="parent_menu_item our_menu_item">
                    <div className="list_menu_container">
                      <span className="dropdown_trigger"> </span>
                      <span
                        className="link_container"
                        role="button"
                        aria-hidden="true"
                      >
                        <Link href="/">
                          <span className="menu_name">STAKE STORM</span>
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>

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
            <div id="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>Menu</span>
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
