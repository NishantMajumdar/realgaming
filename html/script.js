var socket;
var usernameInput
var chatIDInput;
var messageInput;
var chatRoom;
var dingSound;
var messages = [];
var delay = true;

function onload(){
  socket = io();
  socket.emit("send", "New device connected");
  alert("Connected to server. Swing your device and start playing!!!!")
  
  

}

function Sendx(){
  socket.emit("send", "test");
  alert('Data sent');

}