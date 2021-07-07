const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('costmonitor', { title: 'Cost Monitor' });
});

router.post("/", (req, res) => {
  console.log(req.body)
  res.send("Your data has been submitted");
});

module.exports = router;

