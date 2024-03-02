const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
    name: String,
    date_of_birth: Date,
    country: String
});

module.exports = mongoose.model('Artist', artistSchema);
