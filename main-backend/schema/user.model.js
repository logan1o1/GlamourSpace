import mongoose from "mongoose";

const usermodel = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})

const User = mongoose.model("user", usermodel);
export default User;