const mongoose = require('mongoose');

const costmonitorSchema = new mongoose.Schema({
checkinTime: {
type: String,
trim: true,
},
date: {
type: Date,
trim: true,
},
employee: {
type: String,
trim: true,
},
polish: {
type: Number,
trim: true,
},
detergent: {
type: Number,
trim: true,
},
electricUnit: {
type: Number,
trim: true,
},
washerPay: {
type: String,
trim: true,
}
});

module.exports = mongoose.model('Costmonitor', costmonitorSchema); 