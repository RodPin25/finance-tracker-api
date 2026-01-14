const controller = require('../controllers/login.controller');
const express = require('express');

const router = express.Router();

router.post('/login',controller.logUser);

module.exports = router;