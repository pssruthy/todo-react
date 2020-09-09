const express = require('express');

const app = express();

app.locals.todo = {
  heading: 'Todo',
  items: [],
  lastId: 0,
};

const DONE = 'done';
const PROCESSING = 'processing';
const UNDONE = 'undone';

const toggleStatus = {
  [UNDONE]: PROCESSING,
  [PROCESSING]: DONE,
  [DONE]: UNDONE,
};

app.use(express.json());

app.get('/api/getHeading', (req, res) => {
  res.send(JSON.stringify({ heading: app.locals.todo.heading }));
});

app.get('/api/getAllItems', (req, res) => {
  res.send(JSON.stringify({ items: app.locals.todo.items }));
});

app.post('/api/updateHeading', (req, res) => {
  app.locals.todo.heading = req.body.heading;
  res.end();
});

app.post('/api/addItem', (req, res) => {
  const { item } = req.body;
  const { items, lastId } = app.locals.todo;
  items.push({ item, id: lastId + 1, status: UNDONE });
  app.locals.todo.lastId++;
  res.end();
});

app.post('/api/removeItem', (req, res) => {
  const { itemId } = req.body;
  const { todo } = app.locals;
  todo.items = todo.items.filter((item) => item.id !== itemId);
  res.end();
});

app.post('/api/removeTodo', (req, res) => {
  app.locals.todo = { heading: 'Todo', items: [], lastId: 0 };
  res.end();
});

app.post('/api/toggleItemStatus', (req, res) => {
  const { itemId } = req.body;
  const { todo } = app.locals;
  const itemToToggle = todo.items.find(({ id }) => id === itemId);
  itemToToggle.status = toggleStatus[itemToToggle.status];
  res.end();
});

module.exports = app;
