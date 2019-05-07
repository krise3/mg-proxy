const express = require('express');
const router = express.Router();

const Album = require('../database/model.js');

router.get('/album', (req, res) => {
  const conditions = req.query;

  Album.find(conditions)
  .then(albums => {
    res.send(albums);
  })
  .catch(error => {
    console.error(error);
    res.status(500).end();
  });
});

router.post('/album', (req, res) => {
  const newAlbum = req.body;

  Album.create(newAlbum)
  .then(result => {
    res.status(201).end();
  })
  .catch(error => {
    console.error(error);
    res.status(500).end();
  });


});

module.exports = router;