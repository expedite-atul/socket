const socket = io('http://localhost:9000');
const socket2 = io('http://localhost:9000/admin'); // admin namespaces
socket.on('connect', () => {
  console.log(`socket id`, socket.id);
});

socket.on('messageFromServer', (dataFromServer) => {
  console.log(`server side -->`, dataFromServer.data);
  socket.emit('messageToServer', { data: 'data from the client' });
});
socket.on('joined', (msg) => console.log('-------------------------working check--------------------', msg))
socket2.on('welcome', (msg) => console.log('admin namespace', msg));

document.querySelector('#message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('message sent');
  const newMessage = document.querySelector('#user-message').value;
  socket.emit('newMessage', { text: newMessage });
});
