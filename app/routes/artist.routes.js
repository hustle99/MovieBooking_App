const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');

// Routes for artists
router.get('/', artistController.findAllArtists);

module.exports = router;
