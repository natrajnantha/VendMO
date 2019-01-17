import React from "react";
import "./input.css";

export const Input = props => (
  <div className="form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Search..."
      {...props}
    />
  </div>
);
