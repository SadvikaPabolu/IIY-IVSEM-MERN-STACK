const fs = require('fs');
const path = require('path');

// path for src.txt
const filePath = path.join(__dirname, 'src.txt');

// content to write
const content = "HTML, CSS, JavaScript, TypeScript, MongoDB, Express.js, React.js, Node.js";

// write into file
fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("src.txt file created successfully");
    }
});