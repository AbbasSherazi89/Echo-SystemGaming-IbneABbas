import Carousel from "react-bootstrap/Carousel";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube, BsGithub } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaMediumM } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
const HeroComp = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <>
      <div className="container-fluid hero-fluid py-5">
      <div className="particles position-absolute">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: {
                enable: false,
                zIndex: 1,
              },
              particles: {
                number: {
                  value: 10,
                  density: {
                    enable: false,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#fff",
                },
                shape: {
                  type: "circle",
                  options: {
                    sides: 5,
                  },
                },
                opacity: {
                  value: 0.8,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 4,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                rotate: {
                  value: 0,
                  random: true,
                  direction: "clockwise",
                  animation: {
                    enable: true,
                    speed: 5,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 600,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 2,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: ["grab"],
                  },
                  onclick: {
                    enable: false,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
              background: {
                color: "",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover",
              },
            }}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 contenteditable="false">
                Play To Win <br /> Reward on Holding{" "}
              </h1>
              <h3 className="p-0 pt-3" contenteditable="false">
                Frictionless yield &amp; liquidity generation protocol for game
                lover. Povo is deflationary in it's nature{" "}
              </h3>
              <a
                // target="_BLANK"
                href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x2a2d03a47ae6220312337d1f094badcd1ee948cc"
              >
                <button
                  className="button-live-chat fw-bold py-2 text-danger ps-4 pe-4"
                  contentEditable="false"
                >
                  <img
                    src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"
                    contentEditable="false"
                    width={20}
                    alt="img"
                  />{" "}
                  &nbsp; Trade on PancakeSwap
                </button>{" "}
              </a>
              <a
                href="/static/media/Povo.734ac69d.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="button-Buy-now fw-bold py-2 ps-4 pe-4 ms-4"
                  contentEditable="false"
                >
                  Whitepaper
                </button>
              </a>
              <div className="d-flex nav-links py-3">
                <Link className="nav-link" aria-current="page" to="/home">
                  <FaMediumM className="hero-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsGithub className="hero-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <RiSendPlaneFill className="hero-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsTwitter className="hero-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsYoutube className="hero-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <HiOutlineDownload className="hero-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsFacebook className="hero-icons" />
                </Link>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 hero-subcols">
                  <h5>Buying FEE is 5%</h5>
                  <ul>
                    <li>3% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>1% Reflection to holders</li>
                  </ul>
                </div>
                <div className="col-md-6 hero-subcols">
                  <h5>Selling FEE is 7%</h5>
                  <ul>
                    <li>4% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>2% Reflection to holders</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="carousel-card">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="assets/NFT1.png"
                    alt="First slide"
                    width={300}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="assets/NFT2.png"
                    alt="Second slide"
                    width={300}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="assets/NFT3.png"
                    alt="Third slide"
                    width={300}
                  />
                </Carousel.Item>
              </Carousel>
              </div>
              <div className="row token-address mt-3">
                <div className="col-md-10 col-xs-12 m-auto">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Token Address
                      </span>
                    </div>
                    <input
                      type="text"
                      disabled=""
                      className="form-control"
                      defaultValue="0x2a2d03a47ae6220312337d1f094badcd1ee948cc"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-center mt-2 mb-5">
                <div className="col">
                  <a href="https://www.certik.org/projects/povo">
                    <img src="assets/certik.png" alt="..." width={150} />
                  </a>
                </div>
                <div className="col">
                  <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x2a2d03a47ae6220312337d1f094badcd1ee948cc">
                    <img src="assets/pcs.png" alt="..." width={150} />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://xtsupport.zendesk.com/hc/en-us/articles/4405044520729"
                    // target="_BLANK"
                  >
                    <img src="assets/xt.png" alt="..." width={150} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComp;
