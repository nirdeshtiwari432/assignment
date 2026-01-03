const Joi = require("joi");

exports.createContactSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  phone: Joi.string()
    .min(10)
    .max(12)
    .required(),

  message: Joi.string()
    .max(500)
    .allow("")
});
