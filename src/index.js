const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');
const TicketController=require('./controllers/ticket-controller');
const jobs=require('./utils/job');
const setupAndStartServer = ()=> {
    const app=express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT,()=>{
        console.log(`Server is ready to listen on port ${PORT}`);
        jobs();
        /* sendBasicEmail(
            'support@tcs.com',
            'rssaket22@gmail.com',
            'This is a testing mail',
            'hey how are you'
        ); */        
    });
}

setupAndStartServer();