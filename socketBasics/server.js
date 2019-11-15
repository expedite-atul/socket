const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(3000, () => console.log('server running on 3000'));
// const adminNamespace = io.of('/admin');
const io = socketio(expressServer, {
  path: '/socket.io',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
  // serveClient: true,
});
io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: 'welcome to socketIO server' });
  socket.on('messageToServer', () => {
  });
  socket.on('newMessage', (message) => {
    console.log(message);
    io.emit('messageToClients', { text: message.text });
  });
});

io.of('/admin').on('connect', (socket2) => {
  console.log('connected to second socket instance', socket2.id);
  io.of('/admin').emit('welcome to the admin namespace')
});
