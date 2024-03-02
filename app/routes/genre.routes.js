const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre.controller');

// Routes for genres
router.get('/', genreController.findAllGenres);

module.exports = router;
