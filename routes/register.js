const express = require('express');
const router = express.Router();
const Washer = require('../models/Washer')

router.get('/', (req, res) => {
  res.render('registerform', { title: 'Register' });
});

router.post("/", (req,res)=>{
  console.log(req.body)
  const washer = new Washer(req.body);
  washer.save()
      .then(() => { res.send('Thank you for your registering the washer!'); })
      .catch((err) =>{ console.log(err); 
                       res.send('Sorry! Something went wrong.');});
})

module.exports = router;