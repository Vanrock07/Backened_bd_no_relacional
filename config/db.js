const mongoose = require('mongoose');
require('dotenv').config();

//conexion con mongo db
const dbConection = () =>{

    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Connected to Mongo DB'))
    .catch((err) => console.log(err));

};
module.exports = dbConection;