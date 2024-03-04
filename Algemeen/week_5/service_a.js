
const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello, I am service A!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});