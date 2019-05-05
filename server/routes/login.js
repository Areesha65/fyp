const express=require('express');
const loginRoute=express.Router();
const mongoClient=require('mongodb').MongoClient;   
const connectionString=require('../config').dbConnectionString;


loginRoute.get('/tchLogin',(req,res)=>{
    const info=req.body;
    mongoClient.connect(connectionString,{useNewUrlParser: true}).then((response)=>{
        const db=response.db('FinalYearProject');
        db.collection('Professor').findOne({prof_id:info.prof_id},(err,response)=>{
            err ? console.log(err) : console.log(response,"loged in ");
        })
    })
});

loginRoute.post('/signup',(req,res)=>{
    const info=req.body;
    mongoClient.connect(connectionString,{useNewUrlParser: true}).then((response)=>{
        const db=response.db('FinalYearProject');
        db.collection('Professor').find({prof_id:info.prof_id}).toArray((err,data)=>{
            data.length!=0 ? console.log("professor exists") : db.collection('Professor').insertOne(info,(err,data)=>{
                console.log("professor added");
            }) 
        })

    })
    console.log("signup done ");
});

loginRoute.get('/stdLogin',(req,res)=>{
    const info=req.body;
    mongoClient.connect(connectionString,{useNewUrlParser: true}).then((response)=>{
        const db=response.db('FinalYearProject');
        db.collection('students').findOne({std_id:info.std_id},(err,response)=>{
            err ? console.log(err) : console.log(response,"loged in ");
        })
    })
});

module.exports=loginRoute;