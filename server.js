const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('sequelize');
const routes = require('./controllers/');
// const { Server} = require('socket.io')
const socket = require('socket.io');
const Server = require('http');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

//hello

const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
const httpServer = createServer(app);

//app setup
const app = express();
var io = socket(app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
}))

console.log(`test`);

io.on('connection', (socket) => {
  socket.emit("hello", "world");
  console.log(socket.emit);
  console.log(`test io.on`);
});

// httpServer.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// })



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));


// sequelize.sync({ force: false}).then(() => {
//     app.listen(PORT, () => console.log('now listening'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

app.get('/', (req, res) => {
  res.render('homepage');
});
