const express= require('express');
const controller = require('../controllers/signup.controller');

const router = express.Router();

router.post('/signup',controller.signupController);

module.exports = router;