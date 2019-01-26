import axios from "axios";

export default {
  getCategories: function() {
    console.log("In the API");
    return axios.get("/api/category/");
  },
  // Saves a orders to the database
  saveOrder: function(orderData) {
    return axios.post("/api/saveorder", orderData);
  }
};
