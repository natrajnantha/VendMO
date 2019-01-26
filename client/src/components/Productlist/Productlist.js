import React from "react";
import "./Productlist.css";

const Productlist = props => (
  <div key={props.id} className="card">
    <div class="avail">Available: {props.product.availableQty}</div>
    <div class="indays">Inventory days : {props.numberOfDays}</div>
    <div className="img-container">
      <a>
        <img alt="test" src={props.url} />{" "}
      </a>
    </div>
    <div class="desc">
      {props.desc.length > 90
        ? props.desc.substring(0, 90) + "..."
        : props.desc}
    </div>
    {props.loginUser.userType === "customer" ? (
      <button
        class="btn btn-success cartBtn"
        onClick={() => props.addToCart(props.product)}
      >
        ${props.price} - Add to cart
      </button>
    ) : (
      <div />
    )}
  </div>
);

export default Productlist;
