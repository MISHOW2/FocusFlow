const express = require('express');
const router = express.Router();
const {home,signUp} = require('../controllers/auhControllers')
router.get('/', home)


router.post('/signup',signUp)




module.exports = router;
