$(document).ready(function(){

// Make connection
var socket = io.connect('http://localhost:3000');

// Query DOM
var message = document.getElementById('message'),
     handle = document.getElementById('handle'),
     btn = document.getElementById('send'),
     output = document.getElementById('output'),
     feedback = document.getElementById('feedback');
// Emit events
    message.addEventListener('keypress', function(event){

        if(event.which == 13)
        {

            socket.emit('chat', {
            message: message.value,
            handle: handle.value,
            });
            $("#message").val("");  
            $("#handle").attr('disabled', true)    
        }

        
    });

    btn.addEventListener('click', function(event){
            socket.emit('chat', {
            message: message.value,
            handle: handle.value
            }); 
        $("#message").val(""); 
        $("#handle").attr('disabled', true)
        });
     
    
    

    message.addEventListener('keypress', function(){
        socket.emit('typing', handle.value);
    })

    // Listen for events
    socket.on('chat', function(data,event){
        feedback.innerHTML = "";
        output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
         event.preventDefault();


    });



    socket.on('typing', function(data){
        feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
    });

$(".left-first-section").click(function(){
           $('.main-section').toggleClass("open-more");
       });
  
       $(".fa-minus").click(function(){
           $('.main-section').toggleClass("open-more");
       });
});
