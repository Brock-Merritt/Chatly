const chatForm = document.getElementById('chat-form');
const chatMessage = document.querySelector('.chat-messages');

const socket = io();

socket.on('message', message => {
    console.log(message);
    outputMessage(message);

chatMessage.scrollTop = chatMessage.scrollHeight;
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage', msg);
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();

});

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username;
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
  }