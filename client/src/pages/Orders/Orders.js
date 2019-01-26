import React, { Component } from "react";
import Productlist from "../../components/Productlist";
import { Col, Row, Container } from "../../components/Grid";
import { withRouter } from "react-router-dom";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Chartdisplay from "./Chart";

import API1 from "../../utils/prodAPI";
import { Table } from "reactstrap";
import "./Orders.css";
import moment from "moment";

var sum = 0.0;
const orderdata = [["Category", "Total purchased"]];

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = { custOrders: [], custOrdersStats: [], custOrderData: [] };
  }

  componentWillMount() {
    API1.getCustAllOrders(this.props.loginUser._id).then(res => {
      console.log("Return from API");
      console.log(res.data);
      if (res.data.length > 0) {
        this.setState({ custOrders: res.data });
      } else {
        // alert(
        //   "No orders found for " +
        //     this.props.loginUser.first_name +
        //     " " +
        //     this.props.loginUser.last_name
        // );
        console.log("No match found");
      }
    });
  }

  componentDidMount() {
    API1.getCustOrderStatsbyCat(this.props.loginUser._id).then(res => {
      console.log("Return from COUNT API");
      console.log(res.data);
      if (res.data.length > 0) {
        this.setState({ custOrdersStats: res.data });
        this.state.custOrdersStats.map((ostats, i) => {
          orderdata.push([ostats.count + " " + ostats._id, ostats.totalAmount]);
          sum += ostats.totalAmount;
        });
        this.setState({ custOrderData: orderdata });
      } else {
        console.log("No match found");
      }
    });
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
          <div>
            <Sidebar loginUser={this.props.loginUser} />
          </div>
          <div className="checkoutstyle">
            <h1 className="h2">Orders</h1>

            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Purchase Date</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Shipping Address</th>
                  <th>Category</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.custOrders.map((cust, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>
                        {moment(cust.date).format("MMMM Do YYYY, h:mm:ss a")}
                      </td>
                      <td>
                        <span>
                          <a>
                            <img
                              className="img"
                              alt="test"
                              src={cust.products.imageurl}
                            />{" "}
                          </a>
                        </span>
                      </td>
                      <td>
                        {cust.products.desc.length > 50
                          ? cust.products.desc.substring(0, 50) + "..."
                          : cust.products.desc}
                      </td>
                      <td>
                        {cust.shipping.address.number}{" "}
                        {cust.shipping.address.street}{" "}
                        {cust.shipping.address.city}{" "}
                        {cust.shipping.address.state}
                        {","}
                        {cust.shipping.address.zip}
                      </td>
                      <td>{cust.products.category}</td>
                      <td>{cust.products.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <hr />
            <th>Total : {sum}</th>
            <hr />
            <Chartdisplay custOrderData={this.state.custOrderData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
