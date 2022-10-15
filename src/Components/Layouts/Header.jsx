
import {React} from "react";
import {Link} from "react-router-dom"
const Header = () => {


  return (
    <>
      <nav className='navbar navbar-expand-lg py-1' >
        <div className="container">
          <Link to="/">
            <div>
              <img
                className="quant py-2"
                src="assets/logo.png"
                alt=" Logo "
                width={50}
              />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className=" header-nav-col collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item position-relative">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Staking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Goverance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Rugpul
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  FAQ
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="btn btn-danger fw-bold" href="/">
                  Connect Wallet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    {/* </div> */}
    </>
  );
};

export default Header;
