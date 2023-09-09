const express = require('express')
const app = express()

//Routes: GET, POST, PUT, DELETE
app.get('/', function (req, res) {
  res.status(200).json({message: "Hello"}) 
})
app.get('/product', function (req, res) {
    try{
        const data = [
            {"id": 1, "name": "dung", "age":20},
            {"id": 2, "name": "huy", "age":30}
        ]
        res.status(200).json({data: data}) 
    }catch(err){
        res.status(500).json({message: err.message}) 
    }
})
app.get('/blog', function (req, res) {
    res.send("Welcome to my page")
  })
//Listen on port number 9999
app.listen(9999, ()=>{
    console.log("Server listening on port 9999");
})