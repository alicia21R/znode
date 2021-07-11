const express = require('express');
const router = express.Router();
const Login = require('../models/Login')

router.get('/', (req, res) => {
  res.render('loginform', { title: 'Login Zawash' });
});


router.post("/", (req,res)=>{
  console.log(req.body)
  const login = new Login(req.body);
  login.save()
      .then(() => { res.redirect("/tracker"); })
      .then(() => { res.redirect("/cost-Monitor"); })
      .catch((err) =>{ console.log(err); 
                       res.send('Sorry! Something went wrong.');});
})


module.exports = router;

