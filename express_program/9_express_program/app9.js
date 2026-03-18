const express = require('express');
const app = express();

// Set EJS
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {
    res.render('App9', {
        name: "Manikanta",
        course: "MERN Stack"
    });
});

// Server
app.listen(3004, () => {
    console.log("Server running on http://localhost:3004");
});