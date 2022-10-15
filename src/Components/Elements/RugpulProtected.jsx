import React from "react";

const RugpulProtected = () => {
  return (
    <>
      <div className="container-fluid benefit-fluid py-5">
        <div className="container">
          <div className="text-center py-4">
            <h1 contenteditable="false">
              How <span className="text-danger">Povo</span> is Rugpul protected
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6 pt-5 mt-5">
              <ul contentEditable="false" className="rugpul-col1">
                <li contentEditable="false" className="py-4">
                  Povo Presale is going held on UniCrypt which prevents rug-pull
                  by offering auto liquidity lock functionality
                </li>
                <li contentEditable="false" className="pb-4">
                  60% of raised funds in presale is locked into liquidity by
                  UniCrypt for 266 years
                </li>
                <li contentEditable="false" className="pb-4">
                  Transaction fee is never above 7% max.
                </li>
                <li contentEditable="false" className="pb-4">
                  Newly created LP tokens are locked in order to ensure
                  transparency.
                </li>
                <li contentEditable="false" className="pb-4">
                  Smart Contract is audited by CertTik.
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="img-fluid"
                src="assets/why.png"
                alt="benefits"
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RugpulProtected;
