import React, { Component } from "react";
import Dropdown from "../../../components/Form/Dropdown";
import Productlist from "../../../components/Productlist";
import { Input } from "../../../components/Form";
import API1 from "../../../utils/prodAPI";
import { Col, Row, Container } from "../../../components/Grid";
import Cart from "../../../components/Cart";
import { withRouter } from "react-router-dom";
import "./Main.css";

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
    this.loadProducts();
  }

  loadProducts = () => {
    API1.getProducts().then(res =>
      this.setState({ avalProds: res.data, title: "" })
    );
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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

  addToCart = selecteditem => {
    this.setState({ cartItemCount: this.state.cartItemCount + 1 });
    this.setState({ cartitems: [...this.state.cartitems, selecteditem] });
    this.props.setCart(selecteditem);
  };

  displayCart = () => {
    this.state.cartitems.map((cartitem, i) => {});
    this.props.history.push("/DisplayCart");
  };

  render() {
    return (
      <div className="mainstyle col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Shop</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Search"
            />
          </div>
          <div className="btn-toolbar mb-4 mb-md-0">
            <Cart
              displayCart={this.displayCart}
              cartcount={this.state.cartItemCount}
            />
          </div>
          <div className="btn-toolbar mb-2 mb-md-0">
            <Dropdown processDropdown={this.processDropdown} />
          </div>
        </div>
        <Row>
          {this.state.avalProds.map(availProd => {
            return (
              <Productlist
                addToCart={this.addToCart}
                id={availProd._id}
                desc={availProd.desc}
                price={availProd.price}
                url={availProd.imageurl}
                product={availProd}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default withRouter(Main);
