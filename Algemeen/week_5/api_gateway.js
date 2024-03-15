
const express = require('express');
var proxy = require('express-http-proxy');
const express = require('express');
const proxy = require('express-http-proxy');
const circuitBreaker = require('express-circuit-breaker');

const app = express();
const port = 3000;

//create circuit breaker for proxy function

const options = {
    timeout: 10000,
    errorThreshold: 50,
    resetTimeout: 30000
};

app.use(circuitBreaker({
    proxy: 'http://localhost:3001',
    options: options
}));


app.use('/service-a/*', proxy('http://localhost:3001'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});