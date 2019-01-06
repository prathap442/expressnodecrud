const express = require('express');
const app = express();
const port = 3000;

//REST - Representational State Transfer
//let us understand the rest end point with the products
//GET - /products this is used for gettig all the products (thiss comes under the read of the CRUD)

//POST - /products this is 



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



//Now we are doing the rest  operations here and one more method we have here is 
//req.params.id this basically gives the id out of the url but the thing that we need to do is 
//pass the url in such a way that /products/:id format

//Now as we dont have any data base that is where we try to take the products into the array later find the products that which we require 
var products = [
    {
        "id": 1,
        "name": "pro1",
        "description": "this is description for the product 1"
    },
    {
        "id": 2,
        "name": "pro2",
        "description": "this is the description for the product 2"
    },
    {
        "id": 3,
        "name": "pro3",
        "description": "this is the description for the product 3"
    },
    {
        "id": 4,
        "name": "pro4",
        "descripiton": "this isi the description for the product 4"
    }
]

app.get('/products',(req,res)=>{
  if(products.length > 0){
      res.send({"msg": products})
  }
  else{
    res.send({"msg": "there exists no products"})
  }
})

app.post('/products',(req,res)=>{
  console.log(req);  
  res.send('{msg: "attempted to insert the record of product"}');
  //Now here we try to create a record of the product and try to insert  into the database but as we dont have any data base here we try to push the product into the array
})

app.put('/products/:id',(req,res)=>{
    let found_product = products.find((product)=>{
        return product.id == req.params.id
    })
    if(found_product){
      res.send({msg: "attempted to update the producct with id "+req.params.id})
    }
    else{
      res.send({msg: "attempted to accesss a record with the id that doesnot exist"})
    }  
})

app.delete('/products/:id',(req,res)=>{
    res.send({"msg": `attempted to destroy the product with id ${req.params.id}`})
})

app.get('/products/:id',(req,res)=>{
    let found_product = products.find((product)=>{
        return product.id == req.params.id
    });
    if(found_product){
      res.send({msg: "Hi bro! attempted to read the producct with id "+req.params.id})
    }
    else{
    res.send({msg: "attempted to accesss a record with the id that doesnot exist"})
    }
})