const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    number: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  status: { type: String, required: false }
});

userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashpassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

userSchema.pre("save", function(callback) {
  if (!this.password) {
    console.log("no password");
    callback();
  } else {
    this.password = this.hashpassword(this.password);
    callback();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
