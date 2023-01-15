import React from "react";
import { Link } from "react-router-dom";
import C581 from "../images/C581.png";
import download from "../images/download.jpg";
import fbio from "../images/fbio.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import logo from "../images/logo.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <Link to="/home" className="navbar-brand"> */}
        <img
          src={logo}
          class="img-fluid"
          style={{ "max-width": "100px", height: "auto" }}
          alt="..."
        />
        {/* </Link> */}
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
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/services" className="nav-link">
                Our Services
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/newsletter" className="nav-link">
                E News Letter
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/agroscience" className="nav-link">
                Agro Science
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/newsupdates" className="nav-link">
                News And Updates
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/getintouch" className="nav-link">
                Get In Touch
              </Link>
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

      <div className="cards-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={b2} className="card-img-top card-img" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={b3} className="card-img-top card-img" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={b4} className="card-img-top card-img" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <small className="d-block mb-3 text-muted">
                &copy; Biomolecule pvt Ltd
              </small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link to="/about" className="text-muted">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/newsletter" className="text-muted">
                    E News Letter
                  </Link>
                </li>
                <li>
                  <Link to="/agroscience" className="text-muted">
                    Agro Science
                  </Link>
                </li>
                <li>
                  <Link to="/newsupdates" className="text-muted">
                    News And Updates
                  </Link>
                </li>
                <li>
                  <Link to="/getintouch" className="text-muted">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link to="/" className="text-muted">
                    Cool stuff
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-muted">
                    Cool stuff
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-muted">
                    Cool stuff
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-muted">
                    Cool stuff
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Address</h5>
              <ul className="list-unstyled text-small">
                <li>
                  1st Floor, Above Kamdhenu Mart, Ravi Nagar, Old Kautha,
                  Nanded, Maharashtra- 431 601
                  <br /> Mo. 8700951287
                  <br /> Email: biogenomeindia1@gmail.com
                </li>
                <li>
                  Flat No. 41, Ground floor, BLK-E-10, PKT-3, Sector G-8,
                  Narela, Near Bawana J. J. Colony New Delhi- 110 040 <br />
                  Mo. 9013786285
                  <br />
                  Email: biogenomeindia@gmail.com
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
