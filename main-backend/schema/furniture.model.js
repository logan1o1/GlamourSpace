import mongoose from "mongoose";

const furnitureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    file: {
        type: String
    }
})

const Furniture = mongoose.model("furniture", furnitureSchema);

export default Furniture;