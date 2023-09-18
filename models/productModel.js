import { Schema, model } from 'mongoose';
import express from 'express';
const app = express()


//Defined product schema
const productSchema = Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    }, 
    quantity: {
        type: Number,
        required: true,
        default:0
    }
    , 
    price: {
        type: Number,
        required: true
    }
    , 
    image: {
        type: String,
        required: false
    }
}, 
{
    timestamps: true
})

//Defined product
const Product = model('Product',productSchema);
export default Product;