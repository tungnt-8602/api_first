import mongoose, {ObjectId, Schema} from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const userSchema = new Schema({
    "id": {type: ObjectId},
    //Model validation
    "name": {type: String, required: true, validate:{ validator:(value)=> value.length>3, messsafe: "required"}},
    "email": {type: String, required: true, validate:{ validator:(value)=> isEmail, messsafe: "required"}},
    "password": {type: String, required: true},
    "phoneNumber": {type: String, required: true},
    "address": {type: String, required: true},
})
const User = mongoose.model('User', userSchema);    
export default User;