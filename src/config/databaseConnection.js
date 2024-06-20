// Content: Database Conncection Setup.
// Author: Kunal Chandra Das.
// Date: 20/06/2024

const mongoose = require('mongoose');
const envConfig = require('./envConfig');


const connectDb = async() => {
try {

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Error occured in database system', err);
    });
    await mongoose.connect(envConfig.databaseConnectionString);

} catch (error) { 
    console.log('Sorry we are unable to connecet to database');
    process.exit(1);
}
}
module.exports = connectDb;