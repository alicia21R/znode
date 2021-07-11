const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
washPackage: {
type: String,
trim: true,
},
carType: {
type: String,
trim: true,
},
Payment: {
type: String,
trim: true,
},
uname: {
type: String,
trim: true,
},
telephone: {
type: Number,
trim: true,
}
});

module.exports = mongoose.model('Booking', bookingSchema); 