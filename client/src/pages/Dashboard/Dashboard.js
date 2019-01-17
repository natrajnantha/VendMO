import React, { Component } from "react";
import "./Dashboard.css";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import Main from "./Main/Main";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("IN DASHBOARD COMPONENT DID MOUNT " + this.props.cart.length);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          {/* <div className="row"> */}
          <Sidebar />
          <Main
            loginUser={this.props.loginUser}
            cart={this.props.cart}
            setCart={this.props.setCart}
          />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
