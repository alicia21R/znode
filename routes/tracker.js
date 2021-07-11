const express = require('express');
const router = express.Router();
const Tracker = require('../models/Tracker')

router.get('/', (req, res) => {
  res.render('trackerform', { title: 'Car Tracker' });
});


router.post("/", (req,res)=>{
  console.log(req.body)
  const tracker = new Tracker(req.body);
  tracker.save()
      .then(() => { res.redirect('/cost-Monitor'); })
      .catch((err) =>{ console.log(err); 
                       res.send('Sorry! Something went wrong.');});
})


module.exports = router;

