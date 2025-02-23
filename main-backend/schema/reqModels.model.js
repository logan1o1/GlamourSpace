import mongoose from "mongoose";

const reqModel = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Reqmodels = mongoose.model("reqmodels", reqModel);

export default Reqmodels;