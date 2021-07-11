const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking')

router.get('/', (req, res) => {
  res.render('bookingform', { title: 'Booking ZaWash' });
});


router.post("/", (req,res)=>{
  console.log(req.body)
  const booking = new Booking(req.body);
  booking.save()
      .then(() => { res.redirect('/about'); })
      .catch((err) =>{ console.log(err); 
                       res.send('Sorry! Something went wrong.');});
})

module.exports = router;

