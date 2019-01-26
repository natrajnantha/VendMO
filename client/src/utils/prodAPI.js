import axios from "axios";

export default {
  getProducts: function() {
    return axios.get("/api/order/");
  },
  getProductsByCategory: function(cat) {
    return axios.get("/api/order/shop/" + cat);
  },
  saveOrder: function(orderData) {
    return axios.post("/api/order/saveorder", orderData);
  },
  getProductCount: function(id) {
    return axios.get("/api/order/count/" + id);
  },
  getProductsById: function(id) {
    return axios.get("/api/order/" + id);
  },
  getProductsByDesc: function(desc) {
    return axios.get("/api/order/desc/" + desc);
  },
  getCustAllOrders: function(custid) {
    return axios.get("/api/order/custorders/" + custid);
  },
  getCustAllOrdersbyVendor: function(custid) {
    return axios.get("/api/order/vendororders/" + custid);
  },
  getCustOrderStatsbyCat: function(custid) {
    return axios.get("/api/order/custordersstatsbycat/" + custid);
  },
  getVendorOrderStatsbyCat: function(custid) {
    return axios.get("/api/order/vendorordersstatsbycat/" + custid);
  }
};
