const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end("I am connected");
});

const io = socketio(server);

io.on('connection', (socket, req) => {
  socket.emit('welcome', 'I am connected to socket server')
  socket.on('message', (msg) => console.log('hi', msg))
})

server.listen(8000);