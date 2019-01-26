import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import DisplayCart from "./pages/Checkout/DisplayCart";
import Orders from "./pages/Orders/Orders";
import OrdersVendor from "./pages/Orders/OrdersVendor";

var localStorageUpdated = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: null,
      signindata: {},
      loginUser: {},
      cart: []
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (localStorageUpdated) {
      localStorageUpdated = false;
      return false;
    } else {
      return true;
    }
  }

  setAppCart = () => {
    const cartdata = localStorage.getItem("cartdata");

    if (cartdata) {
      this.setState(JSON.parse(cartdata));
    }
    localStorageUpdated = true;
  };

  componentWillMount() {
    const cartdata = localStorage.getItem("cartdata");

    if (cartdata) {
      this.setState(JSON.parse(cartdata));
    }
  }

  componentDidMount() {
    const signindata = localStorage.getItem("signindata");
    let localsignindata = JSON.parse(signindata);
    if (signindata) {
      console.log("LOGIN USER DATA");
      console.log(localsignindata.loginUser);
      this.setState(
        {
          loginUser: localsignindata.loginUser,
          signedIn: localsignindata.signedIn
        },
        function() {
          console.log(this.state);
        }
      );
    }
    console.log(this.state);
  }

  signInUser = user => {
    this.setState({ signedIn: true, loginUser: user });
    localStorage.setItem("signindata", JSON.stringify(this.state));
  };
  signOutUser = () => {
    this.setState(
      {
        signedIn: false,
        loginUser: {},
        cartitems: {},
        cartItemCount: 0
      },
      function() {
        console.log(
          "!!!!!!!!!!!!!!!!!!!! EMPTYING LOCAL STORAGE!!!!!!!!!!!!!!"
        );
        localStorage.setItem("signindata", JSON.stringify(this.state));
        localStorage.setItem("cartdata", JSON.stringify([]));
      }
    );
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/DisplayCart"
              component={() => (
                <div>
                  <DisplayCart
                    displaystatus={this.state.displaystatus}
                    loginUser={this.state.loginUser}
                    cart={this.state.cartitems}
                    signedIn={this.state.signedIn}
                    signInUser={this.signInUser}
                    signOutUser={this.signOutUser}
                    // setCart={this.setCart}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/Dashboard"
              component={() => (
                <Dashboard
                  loginUser={this.state.loginUser}
                  cart={this.state.cart}
                  setAppCart={this.setAppCart}
                  signedIn={this.state.signedIn}
                  signInUser={this.signInUser}
                  signOutUser={this.signOutUser}
                />
              )}
            />
            <Route
              exact
              path="/Orders"
              component={() => (
                <Orders
                  signedIn={this.state.signedIn}
                  signInUser={this.signInUser}
                  signOutUser={this.signOutUser}
                  loginUser={this.state.loginUser}
                />
              )}
            />
            <Route
              exact
              path="/OrdersVendor"
              component={() => (
                <OrdersVendor
                  signedIn={this.state.signedIn}
                  signInUser={this.signInUser}
                  signOutUser={this.signOutUser}
                  loginUser={this.state.loginUser}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
