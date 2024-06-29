const nodemailer = require('nodemailer');

const {EMAIL_ID,EMAIL_PASS}=require('./serverConfig');
const sender = nodemailer.createTransport({
   service: 'GMAIL',
   auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASS
   }
});
module.exports = sender;