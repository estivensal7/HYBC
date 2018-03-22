const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path'); 
var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// setting up app 
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

// static file
// app.use(express.static('/app/views/index.handlebars'));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/views/index.handlebars"));
// });

// Routes
app.get("/",function(req,res){
    res.render("index")
});

// app.get("/home",function(req,res){
//     res.render("index")
// });

// app.get("/home",function(req,res){
//     res.render("index")
// });

// app.get("/home",function(req,res){
//     res.render("index")
// });

// app.get("/home",function(req,res){
//     res.render("index")
// });

