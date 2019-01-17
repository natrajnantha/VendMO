import React, { Component } from "react";
import Productlist from "../../components/Productlist";
import { Col, Row, Container } from "../../components/Grid";
import { withRouter } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import API from "../../utils/API";
import API2 from "../../utils/prodAPI";
import { Table } from "reactstrap";
import "./DisplayCart.css";
var sum = 0.0;

class DisplayCart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.cart.map(availProd => {
      sum += availProd.price;
    });
  }

  componentDidMount() {
    console.log("Display the cart");
    console.log(this.props.cart);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API2.saveOrder({
      products: this.props.cart,
      customer: {
        firstName: this.props.loginUser.firstname,
        lastName: this.props.loginUser.lastname,
        email: this.props.loginUser.email,
        phone: this.props.loginUser.phone,
        address: {
          street: this.props.loginUser.address.street,
          number: this.props.loginUser.address.number,
          city: this.props.loginUser.address.city,
          state: this.props.loginUser.address.state,
          zip: this.props.loginUser.address.zip
        }
      },
      shipping: {
        firstName: this.props.loginUser.firstname,
        lastName: this.props.loginUser.lastname,
        email: this.props.loginUser.email,
        phone: this.props.loginUser.phone,
        address: {
          street: this.props.loginUser.address.street,
          number: this.props.loginUser.address.number,
          city: this.props.loginUser.address.city,
          state: this.props.loginUser.address.state,
          zip: this.props.loginUser.address.zip
        }
      },
      totalPrice: sum,
      status: "ACTIVE"
    })
      .then(() => {
        console.log("Order saved successfully");
        this.props.setCart([]);
        sum = 0.0;
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <div>
            <Sidebar />
          </div>
          <div className="checkoutstyle">
            <h1 className="h2">Checkout</h1>

            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cart.map((availProd, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>
                        <span>
                          <a>
                            <img
                              className="img"
                              alt="test"
                              src={availProd.imageurl}
                            />{" "}
                          </a>
                        </span>
                        {availProd.desc}
                      </td>
                      <td>{availProd.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div>Total : {sum}</div>
            <hr />

            <div className="row">
              <div className="member-container">
                <form>
                  <div className="row">
                    <lable>Customer Information</lable>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-25">
                      <label>Name</label>
                    </div>
                    <div className="col-75">
                      <label for="fname">
                        {this.props.loginUser.firstname}{" "}
                        {this.props.loginUser.lastname}
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>Address</label>
                    </div>
                    <div className="col-75">
                      <label>
                        {this.props.loginUser.address.number}{" "}
                        {this.props.loginUser.address.street}
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label> </label>
                    </div>
                    <div className="col-75">
                      <label>{this.props.loginUser.address.city}</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>{"State, Zip"}</label>
                    </div>
                    <div className="col-75">
                      <label>
                        {this.props.loginUser.address.state} {","}
                        {this.props.loginUser.address.zip}
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="country">Country</label>
                    </div>
                    <div className="col-75">
                      <select id="country" name="country">
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              {/* Member container end */}

              <div className="shippinginfo-container">
                <form>
                  <div className="row">
                    <lable>Shipping Information</lable>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">First Name</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        value={this.props.loginUser.firstname}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="lname">Last Name</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        value={this.props.loginUser.lastname}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>Address</label>
                    </div>

                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="number"
                        value={this.props.loginUser.address.number}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>Street</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="street"
                        value={this.props.loginUser.address.street}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label> </label>
                    </div>

                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="city"
                        value={this.props.loginUser.address.city}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>{"State, Zip"}</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={this.props.loginUser.address.state}
                      />

                      <label> </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={this.props.loginUser.address.zip}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="country">Country</label>
                    </div>
                    <div className="col-75">
                      <select id="country" name="country">
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              {/* Shippinginfo container end */}

              <div className="paymentinfo-container">
                <form>
                  <div className="row">
                    <lable>Payment Information</lable>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-25">
                      <label for="cname">Name on Card</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="cname"
                        value={
                          this.props.loginUser.firstname +
                          " " +
                          this.props.loginUser.lastname
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="lname">Credit Card Number</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="ccard" name="ccard" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>{"Expiration"}</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="  /  "
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>{"Security code"}</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="state" name="state" />
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      value="Submit"
                      onClick={this.handleFormSubmit}
                    />
                  </div>
                </form>
              </div>
              {/* Paymentinfo container end */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCart;
