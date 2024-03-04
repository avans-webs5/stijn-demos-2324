
const express = require('express');
var proxy = require('express-http-proxy');

const app = express();
const port = 3000;


app.use('/service-a', proxy('http://localhost:3001'));


app.get('/service-b', (req, res) => {
      fetch('http://localhost:3002')
    .then(res => res.text())
    .then(body => {
        res.send(body);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});