const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your DB username
  password: 'password', // Replace with your DB password
  database: 'webapp_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// API Routes
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM sample_data';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/data', (req, res) => {
  const { name, value } = req.body;
  const sql = 'INSERT INTO sample_data (name, value) VALUES (?, ?)';
  db.query(sql, [name, value], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, value });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
