const response = require("../response/index");
const db = require('../config/config')
const httpStatus = require("http-status");


exports.saveUser = async (req, res) => {
  try {
    const userJson = {
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      description: req.body.description,
      ip: req.socket.remoteAddress
    };
    const usersDb = db.collection('users');
    const savedUserResponse = await usersDb.doc().set(userJson);
    response.success(req, res, savedUserResponse, httpStatus.CREATED);
  } catch (error) {
    // console.log("Error in saving", error);
    response.error(req, res, error, httpStatus.INTERNAL_SERVER_ERROR);
  }
};

exports.checkServer = (req, res) => {
  return res.json({ message: "Server is working fine." });
}

