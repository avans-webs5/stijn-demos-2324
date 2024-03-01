//express api 
var express = require('express');

var app = express();



app.get('/add/:a/:b', function (req, res) {

    //BAD!
    //send message
    amqp.connect('amqp://localhost', function (err, conn) {
        conn.createChannel(function (err, ch) {

            //create or connect to Queue
            var q_calc_request = 'calc_request';
            ch.assertQueue(q_calc_request, { durable: false });

            let q_calc_result = 'calc_result';
            ch.assertQueue(q_calc_result, { durable: false });

            let body = {
                a: req.params.a,
                b: req.params.b
            }

            ch.sendToQueue(q_calc_request, new Buffer.from(json.strintify(body)));


            ch.consume(q_calc_result, function (msg) {

                res.send({
                    result: msg.content.toString()
                })

                conn.close();

            })
        });
    });
});
