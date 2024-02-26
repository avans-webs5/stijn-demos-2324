//rabit MQ demo send and recieve
var amqp = require('amqplib/callback_api');

let counter = 0;

//send message
amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {

        //create or connect to Queue
        var q = 'hello';
        ch.assertQueue(q, {durable: false});

        //send every 3s
        setInterval(function() {
            var msg = 'Hello World! Nr: ' + counter;
            ch.sendToQueue(q, new Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
            counter++;
        }, 3000);

        //console.log()
    });
});

//on exit app close connection
process.on('exit', function() {
    "Closing connection to RabbitMQ..."
    conn.close();
});

