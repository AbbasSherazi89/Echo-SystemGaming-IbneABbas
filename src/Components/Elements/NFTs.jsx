// import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {CgSearchLoading} from 'react-icons/cg'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NFTs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid Nft-fluid">
        <div className="container   text-center">
          <h1>
            <span className="text-danger">Povo </span>
            Exclusive NFT's{" "}
          </h1>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div>
              <img
                className="img-fluid"
                src="assets/NFT1.png"
                alt=""
                width={300}
              />
              <br />

              <Button
                className="text-white mt-3 ps-4 pe-4"
                variant="danger"
                onClick={handleShow}
              >
                Buy
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><h1 className="text-center">Coming Soon</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CgSearchLoading className="text-center"/>
                </Modal.Body>
              </Modal>
            </div>
            <div>
              <img
                className="img-fluid"
                src="assets/NFT2.png"
                alt=""
                width={300}
              />
               <Button
                className="text-white mt-3 ps-4 pe-4"
                variant="danger"
                onClick={handleShow}
              >
                Buy
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><h1 className="text-center">Coming Soon</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CgSearchLoading className="text-center"/>
                </Modal.Body>
              </Modal>
            </div>
            <div>
              <img
                className="img-fluid"
                src="assets/NFT3.png"
                alt=""
                width={300}
              />
               <Button
                className="text-white mt-3 ps-4 pe-4"
                variant="danger"
                onClick={handleShow}
              >
                Buy
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><h1 className="text-center">Coming Soon</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CgSearchLoading className="text-center"/>
                </Modal.Body>
              </Modal>
            </div>
            <div>
              <img
                className="img-fluid"
                src="assets/NFT4.png"
                alt=""
                width={300}
              />
               <Button
                className="text-white mt-3 ps-4 pe-4"
                variant="danger"
                onClick={handleShow}
              >
                Buy
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><h1 className="text-center">Coming Soon</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CgSearchLoading className="text-center"/>
                </Modal.Body>
              </Modal>
            </div>
            <div>
              <img
                className="img-fluid"
                src="assets/NFT5.png"
                alt=""
                width={300}
              />
               <Button
                className="text-white mt-3 ps-4 pe-4"
                variant="danger"
                onClick={handleShow}
              >
                Buy
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><h1 className="text-center">Coming Soon</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CgSearchLoading className="text-center"/>
                </Modal.Body>
              </Modal>
            </div>
            <div>
              <img
                className="img-fluid"
                src="assets/NFT6.png"
                alt=""
                width={300}
              />
               <Button
                className="text-white mt-3 ps-4 pe-4"
                variant="danger"
                onClick={handleShow}
              >
                Buy
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><h1 className="text-center">Coming Soon</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CgSearchLoading className="text-center"/>
                </Modal.Body>
              </Modal>
            </div>
            <div>
              <img
                className="img-fluid"
                src="assets/NFT7.png"
                alt=""
                width={300}
              />
               <Button
                className="text-white mt-3 ps-4 pe-4"
                variant="danger"
                onClick={handleShow}
              >
                Buy
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><h1 className="text-center">Coming Soon</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CgSearchLoading className="text-center"/>
                </Modal.Body>
              </Modal>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default NFTs;
