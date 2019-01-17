import React from "react";
import "./Cart.css";

const Cart = props => (
  <button
    className="cart btn-success float-left"
    onClick={() => props.displayCart()}
  >
    {props.cartcount}
    <i class="fas fa-shopping-cart" />
  </button>
);

export default Cart;
