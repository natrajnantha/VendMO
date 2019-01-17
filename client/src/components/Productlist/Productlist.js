import React from "react";
import "./Productlist.css";

const Productlist = props => (
  <div key={props.id} className="card">
    <div className="img-container">
      <a>
        <img alt="test" src={props.url} />{" "}
      </a>
    </div>
    <div>{props.desc}</div>
    <div>${props.price}</div>
    <button onClick={() => props.addToCart(props.product)}>Add to cart</button>
  </div>
);

export default Productlist;
