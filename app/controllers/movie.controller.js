const Movie = require('../models/movie.model');

// Controller to search movies by status
exports.findAllMovies = async (req, res) => {
    try {
        const status = req.query.status;
        const movies = await Movie.find({ status });
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to fetch all details of a movie by its id
exports.findOne = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to fetch details of shows of a specific movie by its id
exports.findShows = async (req, res) => {
    // Implementation for fetching shows of a specific movie
};
