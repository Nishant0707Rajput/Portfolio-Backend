const router = require('express').Router();
const controller = require('../../../controller/user');
const {validate,rateLimiting} = require("../../../middleware");
const schema = require("../../../validation/user");

router.get(`/check-server`,controller.checkServer);
router.post(`/save-user`,rateLimiting,validate(schema.userDetail) ,controller.saveUser);


module.exports = router;