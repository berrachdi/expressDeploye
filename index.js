const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req,res,next)=>{
    res.status(200).send("SERVER RESPONSE OK");
})


app.listen(port,()=>{console.log('Application started in'+port+' ...')});