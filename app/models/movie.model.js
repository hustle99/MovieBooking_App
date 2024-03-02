const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    release_date: Date,
    director: String,
    genre: String,
    artist: [String]
});

module.exports = mongoose.model('Movie', movieSchema);
