import mongoose from "mongoose";

const reqModel = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    model: {
        type: String,
        required: true
    }
})

const Reqmodels = mongoose.model("reqmodels", reqModel);

export default Reqmodels;