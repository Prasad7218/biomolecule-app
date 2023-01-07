import React from "react";
import C581 from "../images/C581.png";
import download from "../images/download.jpg";
import fbio from "../images/fbio.jpg";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">BioMolecule Reports</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">Aim and scope</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">To Author's</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">To Author's</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">Editorial Board</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">Awards</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">Mode of Payment</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">About Us</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={fbio} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={C581} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={download} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <footer className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <small className="d-block mb-3 text-muted">
                &copy; My Company
              </small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted">Cool stuff</a>
                </li>
                <li>
                  <a className="text-muted">Random feature</a>
                </li>
                <li>
                  <a className="text-muted">Team feature</a>
                </li>
                <li>
                  <a className="text-muted">Stuff for developers</a>
                </li>
                <li>
                  <a className="text-muted">Another one</a>
                </li>
                <li>
                  <a className="text-muted">Last time</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted">Resource</a>
                </li>
                <li>
                  <a className="text-muted">Resource name</a>
                </li>
                <li>
                  <a className="text-muted">Another resource</a>
                </li>
                <li>
                  <a className="text-muted">Final resource</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted">Team</a>
                </li>
                <li>
                  <a className="text-muted">Locations</a>
                </li>
                <li>
                  <a className="text-muted">Privacy</a>
                </li>
                <li>
                  <a className="text-muted">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
