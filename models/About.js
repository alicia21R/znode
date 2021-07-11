const mongoose = require('mongoose');
const aboutSchema = new mongoose.Schema({
    name: {
    type: String,
    trim: true,
    },
    email: {
    type: String,
    trim: true,
    },
    message: {
    type: String,
    trim: true,
    }
    });
    
    module.exports = mongoose.model('About', aboutSchema); 