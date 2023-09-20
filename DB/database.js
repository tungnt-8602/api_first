import mongoose from "mongoose";

const connectDB = ()=>{
    try {
        const connection = mongoose.connect(process.env.MONGO_URI)
        console.log('connect successfully to MongoDB')
        return connection
    } catch (error) {
        throw new Error('Couldn\'t connect to Database')
    }
}

export default connectDB