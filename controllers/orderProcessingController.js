const db = require("../models");

// Defining methods for the orderProcessingController
module.exports = {
  findAll: function(req, res) {
    db.Product.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCat: function(req, res) {
    db.Product.find(req.params)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Product.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Creating the order");
    db.Order.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getProductCount: function(req, res) {
    db.Order.aggregate([
      { $match: { "products._id": req.params.id } },
      {
        $count: "total_prods"
      }
    ]).then(function(ct) {
      console.log(ct);
      return res.json(ct);
    });
  },
  getProductsByDesc: function(req, res) {
    db.Product.find({
      $text: {
        $search: req.params.desc,
        $caseSensitive: false
      }
    })
      .then(dbModel => {
        res.json(dbModel);
        console.log("Found match");
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  getCustAllOrders: function(req, res) {
    console.log(
      "Getting all the orders placed by the customer " + req.params.id
    );
    db.Order.aggregate([
      { $match: { "customer.custid": req.params.id } },
      { $unwind: "$products" }
    ])
      .then(function(ct) {
        res.json(ct);
        console.log("Found matching orders for customer");
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  getCustOrderStatsbyCat: function(req, res) {
    console.log(
      "Getting statistics of all the orders placed by the customer " +
        req.params.id
    );
    db.Order.aggregate([
      { $match: { "customer.custid": req.params.id } },
      {
        $project: {
          "customer.custid": 1,
          "customer.first_name": 1,
          products: 1
        }
      },
      { $unwind: "$products" },
      {
        $group: {
          _id: "$products.category",
          totalAmount: { $sum: "$products.price" },
          count: { $sum: 1 }
        }
      }
    ])
      .then(function(ct) {
        res.json(ct);
        console.log("Found matching orders for customer");
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  getCustAllOrdersbyVendor: function(req, res) {
    console.log("Getting all the orders placed to the vendor " + req.params.id);
    db.Order.aggregate([
      { $unwind: "$products" },
      { $match: { "products.vendorId": req.params.id } }
    ])
      .then(function(ct) {
        res.json(ct);
        console.log("Found matching orders for vendor");
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  getVendorOrderStatsbyCat: function(req, res) {
    console.log(
      "Getting statistics of aall the orders placed TO THE VENDOR " +
        req.params.id
    );
    db.Order.aggregate([
      {
        $project: {
          "customer.custid": 1,
          "customer.first_name": 1,
          "customer.last_name": 1,
          products: 1
        }
      },
      { $unwind: "$products" },
      { $match: { "products.vendorId": req.params.id } },
      {
        $group: {
          _id: "$products.category",
          totalAmount: { $sum: "$products.price" },
          count: { $sum: 1 }
        }
      }
    ])
      .then(function(ct) {
        res.json(ct);
        console.log("Found matching orders for VENDOR");
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  }
};
