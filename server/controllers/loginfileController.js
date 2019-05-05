const express = require('express');
var router =express.Router();

router.get('/login',(req,res)=>{
    res.send('smaple text here');
});

module.exports = router;