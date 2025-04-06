const { check, validationResult } = require('express-validator');

const validateSignUp = [
  check('email', 'Please provide a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),

  // Middleware to handle validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()
    
      });
    }
    next();
  }
];

module.exports = validateSignUp;
