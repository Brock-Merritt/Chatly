
const path = require('path');
const express = require('express');
const http = require('http');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('sequelize');
const routes = require('./controllers/');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

//hello

console.log(`test`);


const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
// const httpServer = createServer(app);

//app setup
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');




//socket setup
const io = socketio(server);

//connection from browser
io.on('connection', (socket) => {
 
//Current user connects
  socket.emit('message', 'This works!');

// When a new user connects
  socket.broadcast.emit('message', 'User has join chat');

//A user disconnects
 // socket.on('disconnect', () => {
 //   io.omit('message', 'User has left the chat');
//  });

  //catch chats
  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg);
  })
});

// httpServer.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// })



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//static files
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// sequelize.sync({ force: false}).then(() => {
//     app.listen(PORT, () => console.log('now listening'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});