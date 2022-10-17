import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const PovoFetures = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid povo-fluid py-5">
        <div className="container">
          <div className="row m-auto">
            <h1 className="text-center pb-4 ">Povo Features</h1>
            <div className="col-md-4">
              <div className="card p-2 mb-4">
                <div className="card-body text-center">
                  <img
                    className="img-fluid py-2"
                    src="assets/h1.svg"
                    width="70"
                    alt=""
                  />
                  <h4 className="text-danger fw-bold">
                    In-game items <br /> crafting
                  </h4>
                  <p className="card-text text-dark">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <Button
                    className="text-warning fw-bold text-end"
                    variant=""
                    onClick={handleShow}
                  >
                    Read More
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h4 className="text-center">In-game items crafting</h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        In-game items crafting is a skill or set of skills
                        option specifically provides in massively multiplayer
                        online games or role playing games and other game
                        genres. It allows the users to use basic tools within
                        the game to construct a tool for themselves to use
                        later, more likely for the purpose of competitive edge
                        over other participants. Other game genres where
                        crafting tool is available are, FPS team fortress 2,
                        which allows its users to combine different weapons to
                        create a new one. Or, sandbox Minecraft, which allows
                        players to create and repair their weapons.
                      </p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-2 mb-4 bg-danger text-white">
                <div className="card-body text-center ">
                  <img
                    className="img-fluid py-2"
                    src="assets/h2.png"
                    width="70"
                    alt=""
                  />
                  <h4 className="fw-bold">
                    Cross chain interpretability & custom wallet
                  </h4>
                  <p className="card-text">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <Button
                    className="text-warning fw-bold text-end"
                    variant=""
                    onClick={handleShow}
                  >
                    Read More
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h4 className="text-center">Cross-chain interoperability and custom wallets</h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                      DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable.
                      </p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-2 mb-4">
                <div className="card-body text-center">
                  <img
                    className="img-fluid py-2"
                    src="assets/h3.png"
                    width="70"
                    alt=""
                  />
                  <h4 className="text-danger fw-bold">
                    Multiverse <br /> gaming
                  </h4>
                  <p className="card-text text-dark">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <Button
                    className="text-warning fw-bold text-end"
                    variant=""
                    onClick={handleShow}
                  >
                    Read More
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h4 className="text-center">Multiverse gaming</h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                      The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games
                      </p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card p-2 mb-4 bg-danger text-white">
                <div className="card-body text-center">
                  <img
                    className="img-fluid py-2"
                    src="assets/h4.png"
                    width="70"
                    alt=""
                  />
                  <h4 className="fw-bold">
                    Tokenize character <br /> items
                  </h4>
                  <p className="card-text">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <Button
                    className="text-warning fw-bold text-end"
                    variant=""
                    onClick={handleShow}
                  >
                    Read More
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h4 className="text-center">Tokenize character items</h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                      Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.
                      </p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-2 mb-4">
                <div className="card-body text-center">
                  <img
                    className="img-fluid py-2"
                    src="assets/h5.svg"
                    width="70"
                    alt=""
                  />
                  <h4 className="text-danger fw-bold">
                    Gamer/devs can introduce their own token
                  </h4>
                  <p className="card-text text-dark">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <Button
                    className="text-warning fw-bold text-end"
                    variant=""
                    onClick={handleShow}
                  >
                    Read More
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h4 className="text-center">Gamer/devs can introduce their own token</h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                      Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.
                      </p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-2 mb-4 bg-danger text-white">
                <div className="card-body text-center">
                  <img
                    className="img-fluid py-2"
                    src="assets/h6.png"
                    width="70"
                    alt=""
                  />
                  <h4 className="fw-bold">
                    Dapp Store and game studio integration
                  </h4>
                  <p className="card-text">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <Button
                    className="text-warning fw-bold text-end"
                    variant=""
                    onClick={handleShow}
                  >
                    Read More
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h4 className="text-center">Dapp Store and game studio integration</h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                      Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.
                      </p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PovoFetures;
