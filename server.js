import express from 'express';
const app = express()
import * as dotenv from 'dotenv';
import userRouter from './routes/user.js';
import commonApp from './routes/index.js';
import mongoose from 'mongoose';
// import { create } from './models/productModel';
// import { Product } from './models/productModel';


app.get('/', (req, res)=>{
    res.send("Welcome homepage rest Api!")
})
dotenv.config();
app.use(express.json());
const DBString = process.env.DATABASE_URL 
const port = process.env.PORT || 8888;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});
app.use(commonApp);
// //Routes: GET, POST, PUT, DELETE
// app.get('/', function (req, res) {
//   res.status(200).json({message: "Hello"}) 
// })
// app.get('/product', function (req, res) {
//     try{
//         const data = [
//             {"id": 1, "name": "dung", "age":20},
//             {"id": 2, "name": "huy", "age":30}
//         ]
//         res.status(200).json({data: data}) 
//     }catch(err){
//         res.status(500).json({message: err.message}) 
//     }
// })
// app.get('/blog', function (req, res) {
//     res.send("Welcome to my page")
//   })
//Listen on port number 9999

// app.post('/product', async (req, res) =>{
//     try{
//         const product = await Product.create(req.body)
//         if(!product){
//             res.status(500).json({message: "Fail creation"})
//         }
//         res.status(200).json(product)
//     }catch(err){
//         console.log(err.message)
//     }
// });

// //connect to mongodb
mongoose.connect(DBString).then(()=>{
    app.listen(9999, ()=>{
        console.log("Server listening on port 9999")
    })
}).catch((err)=>{
    console.log(err.message)
})