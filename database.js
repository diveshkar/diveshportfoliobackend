const mongoose = require('mongoose');
require('dotenv').config;
const env = require('./middleware/validateEnv');

const DbConnection = async () => {
    await mongoose.connect(env.DATABASE)
    .then((con)=>{
        console.log(`MongoDB is connected to the host :${con.connection.name}`);
    })
    .catch((err)=>{
        console.log(err)
    })

}

module.exports = DbConnection;