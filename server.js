const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/'));

app.use('/assets', express.static(path.join(__dirname, 'build')))

app.listen(process.env.PORT || 8080);
