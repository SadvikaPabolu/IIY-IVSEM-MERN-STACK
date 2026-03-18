const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(cookieParser());

app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// Home Route (NEW)
app.get('/', (req, res) => {
    res.send(`
        <h2>Cookie & Session Demo</h2>
        <a href="/setcookie">Set Cookie</a><br>
        <a href="/getcookie">Get Cookie</a><br>
        <a href="/session">Create Session</a><br>
        <a href="/profile">View Session</a>
    `);
});

// Set Cookie
app.get('/setcookie', (req, res) => {
    res.cookie('username', 'Manikanta');
    res.send("✅ Cookie has been set");
});

// Get Cookie (UPDATED)
app.get('/getcookie', (req, res) => {
    if (req.cookies.username) {
        res.send("✅ Cookie Value: " + req.cookies.username);
    } else {
        res.send("❌ No cookie found. First visit /setcookie");
    }
});

// Create Session
app.get('/session', (req, res) => {
    req.session.user = "Manikanta";
    res.send("✅ Session created");
});

// Access Session (UPDATED)
app.get('/profile', (req, res) => {
    if (req.session.user) {
        res.send("✅ Welcome " + req.session.user);
    } else {
        res.send("❌ No session found. First visit /session");
    }
});

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});