const express = require('express');
const app = express();
const port = 3000;

//REST - Representational State Transfer


app.use((req,res,next)=>{
    console.log(`${req.url}--${req.method}--${req.ip}--${new Date()}`);
    next();
})

app.get('/',(req,res)=>{
    res.send('the response is send')
})


app.listen(port,()=>{
  console.log("listening on the port 3000");
})

app.get('/products',(req,res)=>{
  res.send('{msg: "this is the products catalog"}');
})