import React, { Component } from "react";
import "./Dashboard.css";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Main from "./Main/Main";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("IN DASHBOARD COMPONENT DID MOUNT " + this.props.cart.length);
    console.log("SIGN IN STATUS IS &&&&&&&&&&" + this.props.signedIn);
    console.log(this.props.loginUser);
  }

  render() {
    return (
      <div>
        <Nav
          signedIn={this.props.signedIn}
          signInUser={this.props.signInUser}
          signOutUser={this.props.signOutUser}
          loginUser={this.props.loginUser}
        />
        <div className="container-fluid">
          <Sidebar loginUser={this.props.loginUser} />
          <Main
            loginUser={this.props.loginUser}
            cart={this.props.cart}
            setAppCart={this.props.setAppCart}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
