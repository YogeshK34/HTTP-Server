const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests
app.post('/submit', function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Received POST request with name: ${name}, email: ${email}`);
});

app.get('/backend-api/conversation', function (req, res) {
  const name = req.query.name;
  const email = req.query.email;
  res.send(`Received GET request with name: ${name}, email: ${email}`);
});


// Start the server
app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
