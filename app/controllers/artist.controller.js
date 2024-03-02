const Artist = require('../models/artist.model');

// Controller to get all Artists
exports.findAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
