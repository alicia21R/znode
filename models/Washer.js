const mongoose = require('mongoose');

const washerSchema = new mongoose.Schema({
uname: {
type: String,
trim: true,
},
dob: {
type: Date,
trim: true,
},
phonenumber: {
type: Number,
trim: true,
},
NOK: {
type: String,
trim: true,
},
relationship: {
type: String,
trim: true,
},
contact: {
type: Number,
trim: true,
},
homeaddress: {
type: String,
trim: true
}
});

module.exports = mongoose.model('Washer', washerSchema); 