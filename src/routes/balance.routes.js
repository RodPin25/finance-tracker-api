const controller = require('../controllers/balance.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const express = require('express');

const router = express.Router();

router.get('/balance', authMiddleware, controller.balance);

module.exports = router;