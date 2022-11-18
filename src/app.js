const express = require('express');
const router = require('./routes/index');

const app = express();

router(app);

app.get('/', (_request, response) => {
  response.send();
});

module.exports = app;