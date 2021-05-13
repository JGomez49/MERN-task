//06
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-task';
mongoose.connect(URI)
//hay que inicializar mongodb con 
//mongod en el terminal.
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;