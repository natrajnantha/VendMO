import axios from "axios";

export default {
  saveVendorProduct: function(prodData) {
    console.log("SAVEVENDORPRODUCT product being saved" + prodData);
    console.log(prodData);
    return axios.post("/api/vendor/saveVorder", prodData);
  }
};
