//rabit MQ demo send and recieve
var amqp = require('amqplib/callback_api');

let counter = 0;

//send message
amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {

        //create or connect to Queue
        var q_calc_request = 'calc_request';
        ch.assertQueue(q_calc_request, {durable: false});

        let q_calc_result = 'calc_result';
        ch.assertQueue(q_calc_result, {durable: false});

        ch.consume(q_calc_request, function(msg) {

            console.log(" [x] Received %s", msg.content.toString());
            let body = json.parse(msg.content.toString());
            let result = body.a + body.b;
            ch.sendToQueue(q_calc_result, new Buffer.from(result.toString()));
            console.log(" [x] Sent %s", result.toString());
            
        })
    });
});


//on exit app close connection
process.on('exit', function() {
    "Closing connection to RabbitMQ..."
    conn.close();
});

