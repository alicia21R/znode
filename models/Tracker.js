const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
checkIn: {
type: String,
trim: true,
},
date: {
type: Date,
trim: true,
},
carWasher: {
type: String,
trim: true,
},
carPlate: {
type: String,
trim: true,
},
carColor: {
type: String,
trim: true,
},
carType: {
type: String,
trim: true,
},
washPackage: {
type: String,
trim: true
}
});

module.exports = mongoose.model('Tracker', trackerSchema); 