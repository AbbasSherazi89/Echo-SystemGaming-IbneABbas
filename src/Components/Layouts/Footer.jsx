import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube, BsGithub } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaMediumM } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer-fluid">
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-6 col-sm-12 footer-col1">
              <Link to="/">
                  <img
                    className="logo p-2"
                    src="assets/logo.png"
                    alt=" Logo "
                    width={80}
                  />
              </Link>
              <span className="p-2">
                    <strong> PLAY TO WIN REWARD ON HOLDING </strong> <br />
                    Frictionless yield &amp; liquidity generation protocol{" "}
                    <br /> for game lover. Povo is deflationary in it's nature
              </span>
            </div>
            <div className="col-md-6 col-sm-12 footer-col2">
              <div className="d-flex nav-links">
                <Link className="nav-link" aria-current="page" to="/home">
                  <FaMediumM className="footer-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsGithub className="footer-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <RiSendPlaneFill className="footer-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsTwitter className="footer-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsYoutube className="footer-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <HiOutlineDownload className="footer-icons" />
                </Link>
                <Link className="nav-link ms-3" to="/about">
                  <BsFacebook className="footer-icons" />
                </Link>
              </div>
            </div>
          </div>
          <hr className="line-horizontal" />
          <div className="row">
            <div className="col-md-12">
              <p className="text-center text-white">
              ©2021 Povo Productions Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
