require('dotenv').config();

const environment = {
    port: process.env.PORT,
    host: process.env.HOST,
    databaseConnectionString: process.env.DATA_BASE_CONNECTION_STRING
}

const envConfig = Object.freeze(environment);
module.exports = envConfig;