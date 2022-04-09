const socket = io.connect();

function render(messages) {
    const html = messages.map((message, index) => {
        return (`<div><strong>${message.author}</strong>:<em>${message.text}</em></div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
    const message = {
        author: document.getElementById("username").value,
        text:  document.getElementById("text").value
    };
    socket.emit('new-message', message);
    return false;
}

socket.on('messages', data => {
    render(data);
});