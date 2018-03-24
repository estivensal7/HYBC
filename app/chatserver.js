const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path'); 
const exphbs = require('express-handlebars');
// calling
var server = express();
var app = express();
// chat server set up 
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// setting up app 
const PORT = 3000;
const PORT2 = 3001;



var server1 = server.listen (PORT,function(){   


	console.log("listening for request on Port: " + PORT);

    //socket setup

    var io = socket(server1);

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

// static file
app.use(express.static('public'));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/views/index.handlebars"));
// });

//Routes
// =======================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


//starts the server to begin listening
// =======================================================
app.listen(PORT2, function(){
    console.log("listening on port 3001")
});