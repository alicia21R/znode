const express = require('express');
const router = express.Router();
const About= require('../models/About');

router.get('/', (req, res) => {
  res.render('about', { title: 'About Zawash' });
});


router.post("/", (req,res)=>{
  console.log(req.body)
  const about = new About(req.body);
  about.save()
      .then(() => { res.redirect('/'); })
      .catch((err) =>{ console.log(err); 
                       res.send('Sorry! Something went wrong.');});
})


module.exports = router;

