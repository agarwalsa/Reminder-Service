const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const {sendBasicEmail} = require('./services/email-service');
const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,() => {
            console.log(`server started at port ${PORT}`);
            sendBasicEmail(
                   'support@admin.com',
                   'notiservice1@gmail.com',
                   'This is a testing email',
                   'Hey,Hello How are you,I hope you loved our service See you back soon Thank you'
            );
    });
}
setupAndStartServer();