const db = require("../models");

// Defining methods for the categoryProcessingController
module.exports = {
  findAll: function(req, res) {
    console.log("Invoking category");
    db.ProductCategory.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
