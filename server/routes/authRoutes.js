const express = require('express');
const router = express.Router();
const { home, signUp } = require('../controllers/authControllers');
const validateSignUp = require('../middleware/authMiddleware.js');

router.get('/', home);

router.post('/signup', validateSignUp,signUp);

module.exports = router;
