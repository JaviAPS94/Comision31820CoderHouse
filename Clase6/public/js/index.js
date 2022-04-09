const socket = io();

const input = document.querySelector('input');

const button = document.getElementById('sendAction');

if (button) {
  button.addEventListener('click', () => {
    alert(input.value);
    socket.emit('message', input.value);
  })
}

socket.on('messages', messages => {
    const htmlMessages = messages.map(
        message => `SocketId: ${message.socketid} -> Mensaje: ${message.message}`
    ).join('<br>');

    document.querySelector('p').innerHTML = htmlMessages;
});