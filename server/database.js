const mongoose = require('mongoose');

const { MONGODB } = process.env;

mongoose.connect(MONGODB ? MONGODB : 'mongodb://localhost/pruebita',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:  true,
    useFindAndModify: false
})
    .then(db = console.log("Db conectada"))
    .catch(err => console.error(`Error: ${err}`));