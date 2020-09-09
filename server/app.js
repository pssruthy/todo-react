const express = require('express');

const app = express();

app.locals.todo = { heading: 'Todo' };

app.use(express.json());

app.get('/api/getHeading', (req, res) => {
  res.send(JSON.stringify({ heading: app.locals.todo.heading }));
});

module.exports = app;
