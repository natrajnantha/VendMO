const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log("Creating the PRODUCT");
    console.log(req.body);
    db.Product.create(req.body)
      .then(dbModel => {
        res.json(dbModel);
        console.log(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  }
};
