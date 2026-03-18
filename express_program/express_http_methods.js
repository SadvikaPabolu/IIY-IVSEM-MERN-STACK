const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // to read JSON data

let items = []; // temporary storage

// Default route to test server
app.get('/', (req, res) => {
    res.send('Server is running! Use /items for GET, POST, DELETE requests.');
});

// POST → Add data
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.send('Item added successfully');
});

// GET → Retrieve all data
app.get('/items', (req, res) => {
    res.json(items);
});

// DELETE → Delete specific item by index
app.delete('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        res.send('Item deleted successfully');
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});