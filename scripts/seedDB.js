const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vendmoshopping"
);

const productSeed = [
  {
    category: "Electronics",
    desc: "X-box 2",
    price: 399.99,
    date: new Date(Date.now()),
    imageurl:
      "https://i5.walmartimages.com/asr/7b6814f1-9de0-41ea-a64d-70924a839db6_1.39c71ef3b99d80b17d7d400a5ed578f9.jpeg",
    availableQty: 10
  },
  {
    category: "Posters",
    desc: "Bluejay",
    price: 12.99,
    date: new Date(Date.now()),
    imageurl:
      "https://i5.walmartimages.com/asr/7b6814f1-9de0-41ea-a64d-70924a839db6_1.39c71ef3b99d80b17d7d400a5ed578f9.jpeg",
    availableQty: 10
  },
  {
    category: "Posters",
    desc: "Bird1",
    price: 12.99,
    date: new Date(Date.now()),
    imageurl:
      "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    availableQty: 10
  },
  {
    category: "Posters",
    desc: "Bird2",
    price: 12.99,
    date: new Date(Date.now()),
    imageurl:
      "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    availableQty: 10
  },
  {
    category: "Posters",
    desc: "Bird3",
    price: 12.99,
    date: new Date(Date.now()),
    imageurl:
      "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    availableQty: 10
  },
  {
    category: "Posters",
    desc: "Bird4",
    price: 12.99,
    date: new Date(Date.now()),
    imageurl:
      "https://images.pexels.com/photos/459198/pexels-photo-459198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    availableQty: 10
  },
  {
    category: "Posters",
    desc: "Bird5",
    price: 12.99,
    date: new Date(Date.now()),
    imageurl:
      "https://images.pexels.com/photos/73825/osprey-adler-bird-of-prey-raptor-73825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    availableQty: 10
  }
];

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const categorySeed = [
  {
    category: "   "
  },
  {
    category: "Electronics"
  },
  {
    category: "Books"
  },
  {
    category: "Furnitures"
  },
  {
    category: "Produce"
  },
  {
    category: "Posters"
  }
];

db.ProductCategory.remove({})
  .then(() => db.ProductCategory.collection.insertMany(categorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
