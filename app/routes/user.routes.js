const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Routes for user authentication
router.post('/auth/signup', UserController.signUp);
router.post('/auth/login', UserController.login);
router.post('/auth/logout/:userId', UserController.logout);

// Routes for additional user actions
router.get('/getCouponCode', UserController.getCouponCode);
router.post('/bookShow', UserController.bookShow);

module.exports = router;
