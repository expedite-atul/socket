const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(3000)
const io = socketio(expressServer);

io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: 'welcome to socketio server' });
  socket.on('listen', (dataFromClient) => { console.log(dataFromClient) });
})