import React, { Component } from "react";
import Dropdown from "../../../components/Form/Dropdown";
import Productlist from "../../../components/Productlist";
import { Input } from "../../../components/Form";
import API1 from "../../../utils/prodAPI";
import { Col, Row, Container } from "../../../components/Grid";
import Cart from "../../../components/Cart";
import { withRouter } from "react-router-dom";
import "./Main.css";
import moment from "moment";

var current_date = moment(new Date());

class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    avalProds: [],
    title: "",
    cartitems: [],
    cartItemCount: 0
  };

  componentWillMount() {
    this.setState({ cartItemCount: this.props.cart.length });
  }

  componentDidMount() {
    var searchStr = this.props.location.search.substring(
      1,
      this.props.location.search.length
    );
    const cartdata = localStorage.getItem("cartdata");

    if (cartdata) {
      this.setState(JSON.parse(cartdata));
    }

    if (searchStr.length === 0) {
      this.loadProducts();
    } else {
      API1.getProductsByDesc(searchStr).then(res => {
        if (res.data.length > 0) {
          this.setState({ avalProds: res.data });
        } else {
          alert("No match found for search " + searchStr);
          console.log("No match found");
        }
      });
    }
  }

  loadProducts = () => {
    API1.getProducts().then(res => {
      this.setState({ avalProds: res.data, title: "" });
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = e => {
    var t = document.getElementById("title").value;
    if (t.length === 0) {
      this.loadProducts();
    } else {
      API1.getProductsByDesc(t).then(res => {
        if (res.data.length > 0) {
          this.setState({ avalProds: res.data });
        } else {
          alert("No match found for search " + t);
          console.log("No match found");
        }
      });
    }
  };

  processDropdown = catfilter => {
    if (catfilter === "   ") {
      this.loadProducts();
    } else {
      API1.getProductsByCategory(catfilter).then(res =>
        this.setState({ avalProds: res.data, title: "" })
      );
    }
  };

  setCart = citem => {
    if (Object.keys(citem).length == 0) {
      this.setState({ cartitems: citem }, function() {
        localStorage.setItem("cartdata", JSON.stringify(this.state));
      });
    } else {
      this.setState({ cartitems: [...this.state.cart, citem] }, function() {
        localStorage.setItem("cartdata", JSON.stringify(this.state));
      });
    }
  };

  addToCart = selecteditem => {
    this.setState({ cartItemCount: this.state.cartItemCount + 1 });
    this.setState(
      { cartitems: [...this.state.cartitems, selecteditem] },
      function() {
        localStorage.setItem("cartdata", JSON.stringify(this.state));
        this.props.setAppCart();
      }
    );
    API1.getProductsById(selecteditem._id).then(res => {
      API1.getProductCount(selecteditem._id).then(res => {
        console.log("****Total orders for item " + selecteditem._id);
        console.log(res.data);
      });
    });
  };

  displayCart = () => {
    this.props.history.push("/DisplayCart");
  };

  render() {
    return (
      <div className="mainstyle col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="maintop d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Shop</h1>
          <div className="btn-toolbar mb-4 mb-md-0">
            <Input id="title" name="title" placeholder="Search" />

            <button
              className="btn-success btnstyle mb-4 mb-md-0"
              onClick={this.handleSearchSubmit}
            >
              <i class="fas fa-search" />
            </button>
          </div>
          <div>
            <Dropdown processDropdown={this.processDropdown} />
          </div>
          <div className="btn-toolbar mb-4 mb-md-0">
            <Cart
              displayCart={this.displayCart}
              cartcount={this.state.cartItemCount}
            />
          </div>
        </div>
        <Row>
          {this.state.avalProds.map(availProd => {
            let numberOfDays = current_date.diff(availProd.date, "days");
            return (
              <Productlist
                addToCart={this.addToCart}
                id={availProd._id}
                desc={availProd.desc}
                price={availProd.price}
                url={availProd.imageurl}
                product={availProd}
                loginUser={this.props.loginUser}
                numberOfDays={numberOfDays}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default withRouter(Main);
