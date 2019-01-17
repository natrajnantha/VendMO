import axios from "axios";

export default {
  // Gets all books
  getCategories: function() {
    console.log("In the API");
    return axios.get("/api/category/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveOrder: function(orderData) {
    return axios.post("/api/saveorder", orderData);
  }
};
