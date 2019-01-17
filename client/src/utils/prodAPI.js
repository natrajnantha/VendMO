import axios from "axios";

export default {
  getProducts: function() {
    console.log("In the API");
    return axios.get("/api/order/");
  },
  getProductsByCategory: function(cat) {
    return axios.get("/api/order/shop/" + cat);
  },
  saveOrder: function(orderData) {
    console.log("In the API to save order");
    console.log(orderData);
    return axios.post("/api/order/saveorder", orderData);
  }
};
