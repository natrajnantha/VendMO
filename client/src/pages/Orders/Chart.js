import React, { Component } from "react";
import Chart from "react-google-charts";
import "./Orders.css";

const options = {
  title: "My Purchases and expense distribution",
  pieHole: 0.4,
  is3D: true
};
class Chartdisplay extends Component {
  componentDidMount() {
    console.log("Chart component will mount");
    console.log(this.props);
  }

  render() {
    return (
      <div className="chartstyle">
        <Chart
          chartType="PieChart"
          width={"500px"}
          height={"400px"}
          data={this.props.custOrderData}
          options={options}
        />
      </div>
    );
  }
}

export default Chartdisplay;
