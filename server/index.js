const express = require('express'),
    path = require('path'),
    morgan = require('morgan');

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//Global Variables
app.use((req,res, next) => {
    next();
});


//Routes




app.listen(app.get('port'), () => {
    console.log(`Server on: http://localhost:${app.get('port')}/`);
});