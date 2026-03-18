const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(cookieParser());
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // 1 minute expiry
}));

// Logger to confirm requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Home route
app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`Visited ${req.session.views} times`);
    } else {
        req.session.views = 1;
        res.send('Welcome! First visit');
    }
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error ending session');
        }
        res.clearCookie('connect.sid');
        res.send('Session ended');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});