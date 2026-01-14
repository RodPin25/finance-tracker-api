const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const controller = require('../controllers/transaction.controller');

const router = express.Router();

router.post('/createtrnsaction',authMiddleware, controller.create);

module.exports = router;