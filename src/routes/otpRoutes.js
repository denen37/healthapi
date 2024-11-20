const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/generate', otpController.createOTP);
router.post('/verify', otpController.verifyOTP);

module.exports = router;