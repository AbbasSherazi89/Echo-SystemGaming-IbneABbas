import React from "react";

const PovoTokenomics = () => {
  return (
    <>
      <div className="container-fluid token-fluid">
        <div className="container">
          <h1 contenteditable="false" className="text-center py-4">
            Povo <span className="text-danger fw-bold">Mission</span>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <ul contentEditable="false">
                <li contentEditable="false" className="my-4">
                  <span
                    style={{
                      backgroundColor: "rgb(23, 108, 165)",
                      padding: "5px 80px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Presale
                  </span>{" "}
                  30%
                </li>
                <li contentEditable="false" className="mb-4">
                  <span
                    style={{
                      backgroundColor: "rgb(255, 193, 7)",
                      padding: "5px 45px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Staking pool
                  </span>{" "}
                  23%
                </li>
                <li contentEditable="false" className="mb-4">
                  <span
                    style={{
                      backgroundColor: "rgb(91, 63, 144)",
                      padding: "5px 30px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Liquidity Pool
                  </span>
                  20%
                </li>
                <li contentEditable="false" className="mb-4">
                  <span
                    style={{
                      backgroundColor: "rgb(200, 30, 80)",
                      padding: "5px 10px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Advisors
                  </span>
                  10%
                </li>
                <li contentEditable="false" className="mb-4">
                  <span
                    style={{
                      backgroundColor: "rgb(235, 56, 116)",
                      padding: "5px 10px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Airdop
                  </span>
                  7%
                </li>
                <li contentEditable="false" className="mb-4">
                  <span
                    style={{
                      backgroundColor: "rgb(47, 172, 206)",
                      padding: "5px 4px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Gaming
                  </span>{" "}
                  7%
                </li>
                <li contentEditable="false" className="my-4">
                  <span
                    style={{
                      backgroundColor: "rgb(245, 140, 139)",
                      padding: 5,
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Team
                  </span>{" "}
                  3%
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="assets/chart.png"
                alt="chart"
                width={550}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PovoTokenomics;
