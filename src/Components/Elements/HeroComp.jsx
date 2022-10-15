import React from "react";

const HeroComp = () => {
  return (
    <>
      <div className="container-fluid hero-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 contenteditable="false">
                Play To Win <br /> Reward on Holding{" "}
              </h1>
              <h3 class="p-0 pt-3" contenteditable="false">
                Frictionless yield &amp; liquidity generation protocol for game
                lover. Povo is deflationary in it's nature{" "}
              </h3>
              <a
                target="_BLANK"
                href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x2a2d03a47ae6220312337d1f094badcd1ee948cc"
              >
                <button className="button-live-chat fw-bold py-2 text-danger ps-4 pe-4" contentEditable="false">
                  <img
                    src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"
                    contentEditable="false"
                    width={20}
                  />{" "}
                  &nbsp; Trade on PancakeSwap
                </button>{" "}
              </a>
              <a
                href="/static/media/Povo.734ac69d.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button-Buy-now fw-bold py-2 ps-4 pe-4 ms-4" contentEditable="false">
                  Whitepaper
                </button>
              </a>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComp;
