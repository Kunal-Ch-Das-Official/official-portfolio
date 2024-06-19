const express = require('express');
const envConfig = require('./envConfig');

const app = express();
const appConfig = {
    port: envConfig.port,
    hostName: envConfig.host
}

app.get('/', (req, res) => {
    res.send('server is connected');
});

app.listen(appConfig.port, () => {
    console.log(`server is running on ${appConfig.hostName}${appConfig.port}`);
});
