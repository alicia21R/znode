const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('about', { title: 'About Zawash' });
});

router.post("/", (req, res) => {
  console.log(req.body)
  res.send("Your message has been submitted");
});

module.exports = router;

