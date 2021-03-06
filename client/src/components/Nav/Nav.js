import React, { Component } from "react";
import SignUp from "./SignUpModal";
import SignIn from "./SignInModal";
import { FaUser } from "react-icons/fa";
import { Button } from "reactstrap";
import userAPI from "../../utils/user";
import "./Nav.css";
import smalllogo from "./smalllogo.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      street: "",
      number: "",
      city: "",
      state: "",
      zip: "",
      userType: "",
      signUpModal: false,
      signInModal: false,
      signedUp: false
    };
  }
  toggleSignInModal = () => {
    this.setState({
      signInModal: !this.state.signInModal,
      username: "",
      password: ""
    });
  };
  toggleSignUpModal = () => {
    this.setState({
      signUpModal: !this.state.signUpModal,
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      signedUp: false
    });
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  signIn = () => {
    const { username, password } = this.state;
    userAPI.loginUser({ username, password }).then(({ data }) => {
      console.log("Return from loginuser API");
      console.log(data);
      if (data === null) {
        alert("Incorrect Login");
      } else {
        this.props.signInUser(data);
        this.toggleSignInModal();
      }
    });
  };
  signOut = () => {
    this.props.signOutUser();
  };
  signUp = () => {
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      number,
      street,
      city,
      state,
      zip,
      phone,
      userType
    } = this.state;
    userAPI
      .createUser({
        username,
        email,
        password,
        first_name,
        last_name,
        address: { number, street, city, state, zip },
        phone,
        userType
      })
      .then(res => {
        this.setState({ signedUp: true });
        setTimeout(() => {
          this.toggleSignUpModal();
          this.toggleSignInModal();
        }, 2000);
      });
  };
  inputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    console.log("NAVIGATION MENU LOGIN STATUS DEBUG***");
    console.log(this.props);
  }
  render() {
    return (
      <div className="container-fluid generalNav">
      <div className="row">
        <div className="container clearfix">
          <img
            className="smalllogo float-left"
            src={smalllogo}
            alt="smalllogo"
            srcSet
          />
          <ul className="nav float-right">
            {this.props.signedIn ? (
                <span>
              <li onClick={this.signOut} className="nav-item navcolor d-inline">
                  <a className="nav-link active" href="#">
                    Sign Out
                  </a>
              </li>
              <li className="nnav-item navcolor d-inline">
                {/* <a className="usercolor">{this.props.loginUser.first_name}, you are logged in</a> */}
                <a className="nav-link active usercolor"><span className="navfontclolor d-inline">{this.props.loginUser.first_name}</span> is logged in as a <span className="navfontclolor d-inline">{this.props.loginUser.userType}</span></a>
                </li>
                </span>
            ) : (
                <span>
                  <li
                    onClick={this.toggleSignInModal}
                    className="nav-item navcolor d-inline"
                  >
                    <a className="nav-link active" href="#">
                      Sign In
                  </a>
                  </li>
                  <li
                    onClick={this.toggleSignUpModal}
                    className="nav-item navcolor d-inline"
                  >
                    <a className="nav-link active" href="#">
                      Register
                  </a>
                  </li>
                </span>
              )}
          </ul>

          <SignUp
            modal={this.state.signUpModal}
            modalTitle={"Enter in information to sign up"}
            toggleModal={this.toggleSignUpModal}
            username={this.state.username}
            email={this.state.email}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            password={this.state.password}
            phone={this.state.phone}
            street={this.state.street}
            number={this.state.number}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
            userType={this.state.userType}
            inputHandler={this.inputHandler}
            signUp={this.signUp}
            signedUp={this.state.signedUp}
          />
          <SignIn
            modalTitle={"Enter in information to sign in"}
            modal={this.state.signInModal}
            toggleModal={this.toggleSignInModal}
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            inputHandler={this.inputHandler}
            signIn={this.signIn}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Nav;
