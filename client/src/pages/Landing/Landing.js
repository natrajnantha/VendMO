import React, { Component } from "react";
import "./Landing.css";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import webLanding from "./webLanding.svg";

class Landing extends Component {
  handleSearchClick = () => {
    this.props.history.push({
      pathname: "/Dashboard",
      search: document.getElementById("searchText").value
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <img
            className="landingImg"
            src={webLanding}
            alt="webLanding"
            srcSet
          />
          <InputGroup className="searchlanding">
            <Input className="inputlanding"
            id="searchText"/>
            <InputGroupAddon addonType="append">
              <Button className="colorlandingbtn"
                id="basic-addon2"
                onClick={this.handleSearchClick}>Search</Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="container text-center landingline">
            Buy Quickly. Buy Quality. Sell Local.
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
