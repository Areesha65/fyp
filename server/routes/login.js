const express=require('express');
const loginRoute=express.Router();


loginRoute.get('/login',(req,res)=>{
    console.log("login requested ");
});

loginRoute.get('/signup',(req,res)=>{
    console.log("good");
});

module.exports=loginRoute;