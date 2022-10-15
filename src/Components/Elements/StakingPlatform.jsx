import React from "react";

const StakingPlatform = () => {
  return (
    <>
      {/* staking-fluid1 */}
      <div className="container-fluid staking-fluid1 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                className="img-fluid"
                src="assets/yahoo.png"
                alt=""
                width={250}
              />
            </div>
            <div className="col-md-6 text-center">
              <img
                className="img-fluid"
                src="assets/benzinga.png"
                alt=""
                width={250}
              />
            </div>
          </div>
        </div>
      </div>

      {/* staking-fluid2 */}

      <div className="container-fluid staking-fluid2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="assets/stake.laptop.png"
                alt="stake"
              />
            </div>
            <div className="col-md-6 stake">
              <div className="text-center">
                <h1>
                  <span className="text-danger ">Povo</span>
                  Staking Platform
                </h1>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fs-14 fw-bold mt-3 mb-3 btn  btn-lg pl-4 pr-4 shadow text-white bg-danger"
                  href="https://stake.povo.finance/"
                  role="button"
                >
                  Launched, Povo Staking
                </a>
              </div>
              <ul>
                <p>
                  <strong>Key features</strong>
                </p>
                <li>
                  You can stake your POVO at any time you choose. You can stake
                  any amount of POVO you wish.
                </li>
                <li>
                  Once staked, the contract will deliver a reward continuously
                  for as long as tokens remain staked.
                </li>
                <li>
                  You can withdraw any amount of staked POVO tokens without any
                  locking period
                </li>
                <li>You are free to stake additional amounts at any time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingPlatform;
