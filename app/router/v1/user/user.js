const router = require('express').Router();
const controller = require('../../../controller/user');
const {validate} = require("../../../middleware");
const schema = require("../../../validation/user")

router.get(`/check-server`,controller.checkServer);
router.post(`/save-user`,validate(schema.userDetail) ,controller.saveUser);


module.exports = router;