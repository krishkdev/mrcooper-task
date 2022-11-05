const Joi = require("@hapi/joi");

const registerValidator = (data) => {
  const schema = {
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    DOB: Joi.string().min(6).required(),
    catogery: Joi.string()
      .min(6)
      .required(),
  };
  return Joi.validate(data, schema);
};

const loginValidator = (data) => {
    const schema = {
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    };
    return Joi.validate(data, schema);
  };
module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;