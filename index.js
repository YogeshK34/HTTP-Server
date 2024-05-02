const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.post('/backend-api/conversation', function (req, res) {
  const message = req.body.message;
  console.log(message);
  res.json({
    output: "2 = 2 = 4"
  });
});

// PUT method
app.put('/backend-api/conversation/:id', function (req, res) {
  const id = req.params.id;
  // Update conversation with id = id
  res.send(`Conversation ${id} updated`);
});

// DELETE method
app.delete('/backend-api/conversation/:id', function (req, res) {
  const id = req.params.id;
  // Delete conversation with id = id
  res.send(`Conversation ${id} deleted`);
});

// PATCH method
app.patch('/backend-api/conversation/:id', function (req, res) {
  const id = req.params.id;
  // Update partial information of conversation with id = id
  res.send(`Partial update for conversation ${id}`);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
