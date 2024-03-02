const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const app = express();

// Middleware to enable CORS
app.use(cors());

// Default route
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

// MongoDB connection
const MONGODB_URI = dbConfig.url;
const MONGODB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
    .then(() => {
        console.log("Connected to MongoDB!");
        // Start the server after successful connection
        const PORT = process.env.PORT || 8085;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Import routes
const movieRoutes = require('./routes/movie.routes');
const genreRoutes = require('./routes/genre.routes');
const artistRoutes = require('./routes/artist.routes');

// Use routes
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/artists', artistRoutes);
