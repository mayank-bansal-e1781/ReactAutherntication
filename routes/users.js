const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validator = require("../helpers/InputValidator");

// Load users model
const User = require("../models/users");

// @route /api/users/register
// @access public
// @desc register route
router.post("/register", (req, res) => {
  let { errors, isValid } = validator.validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).send(errors);
  }
  User.findOne({ username: req.body.username })
    .then(user => {
      errors.username = "user name already exists";
      if (user) return res.status(400).send(errors);
      else {
        const user = {
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          country: req.body.country,
          gender: req.body.gender,
          password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        };
        User.create(user, (err, user) => {
          if (err) throw err;
          else {
            return res.json(user);
          }
        });
      }
    })
    .catch(err => {
      return res.status(500).send("Server error");
    });
});

// @route /api/users/login
// @access public
// @desc login user / return jwt
router.post("/login", (req, res) => {
  let { errors, isValid } = validator.validateLoginInput(req.body);

  let username = req.body.username;
  let password = req.body.password;
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        errors.username = "User not Found";
        return res.status(404).json(errors);
      }

      bcrypt
        .compare(password, user.password)
        .then(result => {
          if (result) {
            jwt.sign(
              { id: user.id, username: user.username },
              keys.secretKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            errors.password = "password is wrong";
            return res.status(400).json(errors);
          }
        })
        .catch(err => {
          return res.send(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
