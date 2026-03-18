const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Show form
app.get('/', (req, res) => {
    res.render('form');
});

// Handle form
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const course = req.body.course;

    res.render('result', { name, course });
});

// Server
app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});