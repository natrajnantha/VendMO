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
    this.state = {
      vendorOrders: [],
      vendorOrdersStats: [],
      vendorOrderData: []
    };
  }

  componentWillMount() {
    API1.getCustAllOrdersbyVendor(this.props.loginUser._id).then(res => {
      console.log("Return from API");
      console.log(res.data);
      if (res.data.length > 0) {
        this.setState({ vendorOrders: res.data });
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
    API1.getVendorOrderStatsbyCat(this.props.loginUser._id).then(res => {
      console.log("Return from COUNT API");
      console.log(res.data);
      if (res.data.length > 0) {
        this.setState({ vendorOrdersStats: res.data });
        this.state.vendorOrdersStats.map((ostats, i) => {
          orderdata.push([ostats.count + " " + ostats._id, ostats.totalAmount]);
          sum += ostats.totalAmount;
        });
        this.setState({ vendorOrderData: orderdata });
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
                  <th>Item</th>
                  <th>Purchase Date</th>
                  <th>Description</th>
                  <th>Shipping Address</th>
                  <th>Category</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.vendorOrders.map((vendor, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>
                        {moment(vendor.date).format("MMMM Do YYYY, h:mm:ss a")}
                      </td>
                      <td>
                        <span>
                          <a>
                            <img
                              className="img"
                              alt="test"
                              src={vendor.products.imageurl}
                            />{" "}
                          </a>
                        </span>
                      </td>
                      <td>
                        {vendor.products.desc.length > 50
                          ? vendor.products.desc.substring(0, 50) + "..."
                          : vendor.products.desc}
                      </td>
                      <td>
                        {vendor.shipping.address.number}{" "}
                        {vendor.shipping.address.street}{" "}
                        {vendor.shipping.address.city}{" "}
                        {vendor.shipping.address.state}
                        {","}
                        {vendor.shipping.address.zip}
                      </td>
                      <td>{vendor.products.category}</td>
                      <td>{vendor.products.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <hr />
            <th>Total : {sum}</th>
            <hr />
            <Chartdisplay custOrderData={this.state.vendorOrderData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
