const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const models = require('./models/');

const app = express();
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./controllers/'));

models.sequelize.sync().then(() => {
  app.listen(3000);
});
