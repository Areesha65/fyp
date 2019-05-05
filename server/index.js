const express=require('express');
const server=express();
const bodyParser=require('body-parser');
const port=process.env.port || 3000;

const loginRoute=require('./routes/login');
const scheduleRouter = require('./routes/schedule');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
const mongodb=require('mongodb');

mongodb.connect('mongodb+srv://STD:areesha12345@cluster0-p9rgz.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true })
.then(()=>{
    console.log('db working');
}).catch(err=>{
    console.log(err);
});


server.get('/',(req,res)=>{
    res.send("good , it worked ");
});

server.use('/loginRoute',loginRoute);

server.listen(port,()=>{
    console.log("server is listening on port  3000");
});

