import React, { Component } from "react";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Dropdown from "../../components/Form/Dropdown";

import API3 from "../../utils/VendorProdAPI";
import "./Productadd.css";

class Productadd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      desc: "",
      price: "",
      imageurl: "",
      availableQty: "",
      vendorId: ""
    };
  }

  processDropdown = catfilter => {
    console.log("Selected " + catfilter);
    this.setState({ category: catfilter });
  };

  componentDidMount() {
    this.setState({ vendorId: this.props.loginUser._id }, function() {
      console.log(
        "PRODUCTADD COMPONENT DID MOUNT&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
      );
      console.log(this.state);
    });
  }

  inputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("PRODUCT BEING CREATED");
    API3.saveVendorProduct({
      category: this.state.category,
      desc: this.state.desc,
      price: this.state.price,
      imageurl: this.state.imageurl,
      availableQty: this.state.availableQty,
      vendorId: this.state.vendorId
    })
      .then(() => {
        console.log("Product saved successfully");
        alert("Product saved successfully");
      })
      .catch(err => console.log(err));
  };

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
            <h1 className="h2">Add Product</h1>

            <div className="row">
              <div className="product-container">
                <form>
                  <div className="row">
                    <lable>Add Product Information</lable>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Category</label>
                    </div>
                    <div className="col-75">
                      <Dropdown processDropdown={this.processDropdown} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="desc">Description</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="desc"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.inputHandler}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>Price</label>
                    </div>

                    <div className="col-75">
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={this.state.price}
                        onChange={this.inputHandler}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>Image URL</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="imageurl"
                        name="imageurl"
                        value={this.state.imageurl}
                        onChange={this.inputHandler}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label>Available Quantity </label>
                    </div>

                    <div className="col-75">
                      <input
                        type="text"
                        id="availableQty"
                        name="availableQty"
                        value={this.state.availableQty}
                        onChange={this.inputHandler}
                      />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productadd;
