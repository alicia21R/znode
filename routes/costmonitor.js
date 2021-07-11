const express = require('express');
const router = express.Router();
const Costmonitor = require('../models/Costmonitor')

router.get('/', (req, res) => {
  res.render('costmonitor', { title: 'Cost Monitor ZaWash' });
});


router.post("/", (req,res)=>{
  console.log(req.body)
  const costmonitor = new Costmonitor(req.body);
  costmonitor.save()
      .then(() => { res.redirect("/"); })
      .catch((err) =>{ console.log(err); 
                       res.send('Sorry! Something went wrong.');});
                       
})

module.exports = router;

