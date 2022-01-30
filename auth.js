const express = require('express');
const userdata = require('./user');
const router = express.Router();
// controller
const loginController = require('./login');




router.post('/login',loginController.loginReq);
router.post('/signup',loginController.signup);




module.exports = router;