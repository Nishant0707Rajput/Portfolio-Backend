const response = require("../response/index");
const db = require('../config/config')
const httpStatus = require("http-status");
const User = require('../model/user');


exports.saveUser = async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      description: req.body.description,
      ip: req.socket.remoteAddress
    });
    const savedUserResponse = await newUser.save();
    const result = {
      data: {
        createdAt: savedUserResponse.createdAt
      }
    };
    response.success(req, res, result, httpStatus.CREATED);
  } catch (error) {
    console.log("Error in saving", error);
    response.error(req, res, error, httpStatus.INTERNAL_SERVER_ERROR);
  }
};

exports.checkServer = (req, res) => {
  return res.json({ message: "Server is working fine." });
}

