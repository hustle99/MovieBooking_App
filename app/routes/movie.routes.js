const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

// Route for retrieving all movies
router.get('/', movieController.findAllMovies);

// Route for retrieving a specific movie by its ID
router.get('/:movieId', movieController.findOne);

module.exports = router;
