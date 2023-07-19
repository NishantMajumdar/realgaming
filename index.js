
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const {keyboard, Key} = require("@nut-tree/nut-js");
const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);
const sendkeys = require("sendkeys-js");
const gamedirectory = path.join(__dirname, "html");

app.use(express.static(gamedirectory));
console.log('============================================================================================');
console.log('============================================================================================');
var ip = require("ip");
console.log('To visit website, and connect on device, put the below IP\n\''+ ip.address() +':3000\'');
console.log('============================================================================================');
console.log('============================================================================================');
// Start the server
httpserver.listen(3000,  function(){
    console.log('The server is listening on port 3000');
console.log('============================================================================================');
console.log('============================================================================================');

});


var rooms = [];
var usernames = [];

io.on('connection', function(socket){

  socket.on("join", function(room, username){
    if (username != ""){
      rooms[socket.id] = room;
      usernames[socket.id] = username;
      socket.leaveAll();
	      socket.join(room);
      io.in(room).emit("recieve", "Server : " + username + " has entered the chat.");h
      socket.emit("join", room);
      console.log("new connect")
    }
  })

  socket.on("send", function(message){
    io.in(rooms[socket.id]).emit("recieve", usernames[socket.id] +" : " + message);
    console.log(message)
	if(message==="h"){

sendkeys.send('h')
	

}
if(message==="j"){

	sendkeys.send('j')
	

}
    
    
  })

  socket.on("recieve", function(message){
    socket.emit("recieve", message);
    
  })
})
