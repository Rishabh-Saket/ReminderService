const express=require('express');
const bodyParser=require('body-parser');

const cron=require('node-cron');

const {PORT}=require('./config/serverConfig');
//const {sendBasicEmail}=require('./services/email-service');
const setupAndStartServer = ()=> {
    const app=express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.listen(PORT,()=>{
        console.log(`Server is ready to listen on port ${PORT}`);

        /* sendBasicEmail(
            'support@tcs.com',
            'rssaket22@gmail.com',
            'This is a testing mail',
            'hey how are you'
        ); */

        cron.schedule('*/2 * * * *',()=>{
            console.log("running a task every two minutes");
        });
    });
}

setupAndStartServer();