const express = require('express');
const router = express.Router();

const controller = require('../controllers/email');

router.post('/email', controller.email);

module.exports = router;