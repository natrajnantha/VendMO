import React, { Component } from "react";
import "./Landing.css";
import webLanding from './webLanding.svg';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container landingnav">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="./signin.html">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Register</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <img className="landingImg" src={webLanding} alt="webLanding" srcSet />
          <div className="input-group mb-3 landingform container">
            <div className="row landingform">
              <input className="searchbar" type="text" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append landingbtn">
                <span className="input-group-text colorlandingbtn" id="basic-addon2">S</span>
              </div>
            </div>
          </div>
          <div className="container text-center landingline">Buy Quickly. Buy Quality. Sell Local.</div>
          <div className="container-fluid landinggreeninfo">
            <div className="row">
              <div className="col">
                <h3>1 of 3</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eligendi, illo magni corporis,
                  dignissimos commodi at sapiente quos, esse magnam voluptatum odio quasi suscipit ea voluptas dolor
                incidunt temporibus. Expedita!</p>
              </div>
              <div className="col">
                <h3>1 of 3</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eligendi, illo magni corporis,
                  dignissimos commodi at sapiente quos, esse magnam voluptatum odio quasi suscipit ea voluptas dolor
                incidunt temporibus. Expedita!</p>
              </div>
              <div className="col">
                <h3>1 of 3</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eligendi, illo magni corporis,
                  dignissimos commodi at sapiente quos, esse magnam voluptatum odio quasi suscipit ea voluptas dolor
                incidunt temporibus. Expedita!</p>
              </div>
            </div>
          </div>
          <footer className="container-fluid" role="contentinfo" aria-labelledby="footer-label">
            <div className="row">
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  Shop
              </h3>
              </div>
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  Sell
              </h3>
              </div>
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  About
              </h3>
              </div>
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  Follow VendMo
              </h3>
              </div>
            </div>
            <div className="copy">
              <span className="text-smaller text-gray-lighter mr-sm-2 text-center">
                © 2019 VendMo, Inc.
            </span>
            </div>
          </footer>
        </div></div>
    );
  }
}

export default Landing;
