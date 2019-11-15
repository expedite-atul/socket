const socket = io('http://localhost:3000');
const socket2 = io('http://localhost:3000/admin'); // admin namespaces
socket.on('connect', () => {
  console.log(`socket id`, socket.id);
});
socket2.on('connect', () => {
  console.log(`second socket id`, socket2.id);
});
socket2.on('welcome', () => {
  console.log(`admin's namespace`);
});
socket.on('messageFromServer', (dataFromServer) => {
  console.log(`from server side -->`, dataFromServer.data);
  socket.emit('messageToServer', { data: 'data from the client' });
});
document.querySelector('#message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('message sent');
  const newMessage = document.querySelector('#user-message').value;
  socket.emit('newMessage', { text: newMessage });
});
socket.on('messageToClients', (msg) => {
  console.log(msg);
  document.querySelector('#messages').innerHTML += `<li>${msg.text}</li>`
}); 