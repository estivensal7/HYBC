const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path'); 
var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
setting up app 
const PORT = 7000;



var server = app.listen (PORT,function(){   


	console.log("listening for request on Port: " + PORT);

    //socket setup

    var io = socket(server);

    io.on('connection', function(socket){

        console.log('Client..Connected', socket.id)

            // Handle chat event
        socket.on('chat', function(data){
            // console.log(data);
            io.sockets.emit('chat', data);
        });

        // Handle typing event
        socket.on('typing', function(data){
            socket.broadcast.emit('typing', data);
        });
    });
});

static file
app.use(express.static('./public/'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/chat.html"));
});