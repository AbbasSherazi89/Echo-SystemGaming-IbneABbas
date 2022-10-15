import React from "react";

const BenefitPovo = () => {
  return (
    <>
      <div className="container-fluid benefit-fluid py-5">
        <div className="container">
          <div className="text-center py-4">
            <h1 contenteditable="false">
              Benefit of<span> Povo</span>{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6 benefit-col1">
                <h5 contentEditable="false" className="py-3">Anyone Who Owns Gaming Assets</h5>
                <ul contentEditable="false" className="pb-2">
                  <li contentEditable="false" className="pb-1">
                    Transfer items to another account
                  </li>
                  <li contentEditable="false" className="pb-1">
                    Renders the items to mount reserve values
                  </li>
                  <li contentEditable="false" className="pb-1">
                    Ease of using the items accross other supported games
                  </li>
                </ul>
                <h5 contentEditable="false" className="pb-2">
                  Game tournament and receive winnings in your wallet
                </h5>
                <h5 contentEditable="false" className="pb-2">
                  Artificial Intelligence improve players expericne
                </h5>
                <h5 contentEditable="false" className="pb-2">Withdraw funds using PayPal</h5>
              </div>    
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="assets/benefit.png"
                alt="benefits"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitPovo;
