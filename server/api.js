const express = require('express');
const router = express.Router();

router.get('/album', (req, res) => {
  console.log(req.query);
  res.status(200).end();
});

router.post('/album', (req, res) => {
  console.log(req.body);
  res.status(201).end();
});

module.exports = router;