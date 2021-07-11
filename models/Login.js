const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
    name: {
    type: String,
    trim: true,
    },
    pwd: {
    type: String,
    trim: true,
    }
    });
    
    module.exports = mongoose.model('Login', loginSchema); 