import React from "react";
import "./Cart.css";

const Cart = props => (
  <button
    className="cart btn-success float-left"
    disabled={props.cartcount === 0 ? true : false}
    onClick={() => props.displayCart()}
  >
    {props.cartcount}
    <i class="fas fa-shopping-cart" />
  </button>
);

export default Cart;
