const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { join } = require('path');

const app = express();
const port = 3000;

const route = require('./routes/index.route');
const db = require('./config/db')

//connect to DB
db.connect()

//body parser
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//config static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
