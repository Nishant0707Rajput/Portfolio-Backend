const app = require('express')();
const { verifyApiKey } = require('../../middleware/auth');
app.use('/user', verifyApiKey ,require('./user/user'));
module.exports = app;
