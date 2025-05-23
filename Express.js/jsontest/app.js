const express = require('express');
const app = express();
const PORT = 3000;

// Route using res.json()
app.get('/json', (req, res) => {
  res.json({ message: 'Success', data: [1, 2, 3] });
});

// Route using res.send() with JSON.stringify
app.get('/stringified', (req, res) => {
  res.send(JSON.stringify({ message: 'Success', data: [1, 2, 3] }));
});

// Optional: force correct header manually
app.get('/stringified-proper-header', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'Success', data: [1, 2, 3] }));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
