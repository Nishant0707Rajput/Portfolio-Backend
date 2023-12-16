const Joi = require('joi');

const userDetail = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(8).max(20).required(),
  description: Joi.string().optional()
});



module.exports = {
  userDetail
};
