const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://urbanaid-server.up.railway.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// ALL routes diarahkan ke index.html
// Client-side router (routes.js) yang akan handle routing sebenarnya
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});