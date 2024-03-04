const express = require('express');

const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Hello, I am service B!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});