const { Schema, model } = require('./connect.js');

const albumSchema = new Schema({
  label: String,
  album_artist: String,
  published: String,
  catalog_number: String,
  title: String,
  additional_info: String,
  songs: String,
});

let Album = model('Album', albumSchema);

module.exports = Album;