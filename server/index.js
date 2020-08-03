require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require("express-handlebars");
const _handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultlayouts: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(_handlebars)
}));
app.set('view engine', '.hbs');


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());




//Global Variables
app.use((req,res, next) => {
    next();
});


//Routes
app.use(require('./routes/index.routes'));



app.listen(app.get('port'), () => {
    console.log(`Server on: http://localhost:${app.get('port')}/`);
});