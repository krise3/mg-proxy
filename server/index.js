const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const api = require('./api.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', api);

app.listen(port, () => console.log(`[Server] Now listening on port ${port}`));