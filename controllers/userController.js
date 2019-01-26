const db = require("./../models");
const passport = require("./../services/passport");

class userController {
  constructor() {}
  createUser(req, res) {
    db.User.create(req.body).then(results => {
      res.json(results);
    });
  }
  logInUser(req, res) {
    const { username, password } = req.body;
    db.User.findOne({ username: username })
      .then(results => {
        console.log(results);
        if (results === null) {
          console.log("Auth record empty");
          res.json(results);
        } else {
          const {
            _id,
            username,
            first_name,
            last_name,
            email,
            phone,
            address,
            status,
            userType
          } = results;
          res.json({
            _id,
            username,
            first_name,
            last_name,
            email,
            phone,
            address,
            status,
            userType
          });
        }
      })
      .catch(err => {
        res.json(err);
        console.log("Error in Auth fetch");
        console.log(err);
      });
  }
  findAllUsers(req, res) {}
}

module.exports = new userController();
