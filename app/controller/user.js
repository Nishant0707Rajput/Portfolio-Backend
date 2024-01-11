const response = require("../response/index");
const httpStatus = require("http-status");
const db = require('../config/config')
const User = require('../model/user');
const { sendMail } = require('../helper/helper.js');


exports.saveUser = async (req, res) => {
  try {
    const userIp = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress;
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      description: req.body.description,
      ip: userIp 
    });
    const messageText = `
      <body>
  <h2>Contact Information</h2>
  <table>
    <tr>
      <td><strong>Email:</strong></td>
      <td>${req.body.email}</td>
    </tr>
    <tr>
      <td><strong>Name:</strong></td>
      <td>${req.body.name}</td>
    </tr>
    <tr>
      <td><strong>Number:</strong></td>
      <td>${req.body.phone}</td>
    </tr>
    <tr>
      <td><strong>Message:</strong></td>
      <td>${req.body.description}</td>
    </tr>
    <tr>
      <td><strong>IP Address:</strong></td>
      <td>${userIp}</td>
    </tr>
  </table>
</body>
    `;
    sendMail(messageText);
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


exports.checkServer = async (req, res) => {
  try {
    return res.json({ message: "Server is working fine.", mailSent: result });
  } catch (err) {
    return res.json({ error: "Error occrured on server" }); I
  }
}