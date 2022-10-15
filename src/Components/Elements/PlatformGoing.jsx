import React from "react";

const PlatformGoing = () => {
  return (
    <>
      <div className="container-fluid platformgoing-fluid py-5">
        <div className="container">
          <h1 contenteditable="false" className="fw-bold text-center">
            Platforms going <span className="text-danger">Live</span> after
            PreSale
          </h1>
          <div className="row py-5">
            <div className="col-md-4 text-center fw-bold">
              <h4 contenteditable="false">Frictionless yield</h4>
              <button class="btn fw-bold text-white" data-bs-toggle="modal" data-bs-target="#exampleModal7" contenteditable="false">Read more</button>
            </div>
            <div className="col-md-4 text-center fw-bold">
              <h4 contenteditable="false">Governance in gaming</h4>
              <button class="btn fw-bold text-white" data-bs-toggle="modal" data-bs-target="#exampleModal8" contenteditable="false">Read more</button>
            </div>
            <div className="col-md-4 text-center fw-bold">
              <h4 contenteditable="false">Staking in gaming</h4>
              <button class="btn fw-bold text-white" data-bs-toggle="modal" data-bs-target="#exampleModal9" contenteditable="false">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformGoing;
