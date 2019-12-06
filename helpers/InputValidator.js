const isEmpty = require('./help');
const validator = require('validator');

let validateRegisterInput = function (data) {
  let errors = {};
  data.name = isEmpty(data.name) ? '' : data.name;
  data.email = isEmpty(data.email) ? '' : data.email;
  data.password = isEmpty(data.password) ? '' : data.password;
  data.cpassword = isEmpty(data.cpassword) ? '' : data.cpassword;
  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Not a valid email';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'password is required';
  }
  if (!validator.isLength(data.password, {min: 6,  max: 30})) {
    errors.password = 'password should be atleast 6 characters long and max 30 characters';
  }
  if (!validator.equals(data.password, data.cpassword)) {
    errors.cpassword = 'password field do not match';
  }
  if (validator.isEmpty(data.cpassword)) {
    errors.cpassword = 'confirm password is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

let validateLoginInput = function (data) {
  let errors = {};
  data.email = isEmpty(data.email) ? '' : data.email;
  data.password = isEmpty(data.password) ? '' : data.password;

  if (validator.isEmpty(data.username)) {
    errors.username = 'User name is required';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'password is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};



module.exports = {
  validateRegisterInput,
  validateLoginInput
};
