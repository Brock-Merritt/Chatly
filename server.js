const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('sequelize');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;


const hbs = exphbs.create({});



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));


// sequelize.sync({ force: false}).then(() => {
//     app.listen(PORT, () => console.log('now listening'));
// });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });