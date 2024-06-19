require('dotenv').config();

const environment = {
    port: process.env.PORT,
    host: process.env.HOST
}

const envConfig = Object.freeze(environment);
module.exports = envConfig;