import React from "react";
import "./input.css";

export const Input = props => (
  // <div className="xxxformgroup">
  <input
    type="text"
    placeholder="Search..."
    {...props}
    className="xxxformgroup"
  />
  // </div>
);
