const express = require('express');
var scheduleRouter =express.Router();

scheduleRouter.get('/getSchedule',(req,res)=>{
    res.send('smaple text here');
});

scheduleRouter.post('/saveSchedule',(req,res)=>{
    res.send('smaple text here');
});

module.exports = scheduleRouter;