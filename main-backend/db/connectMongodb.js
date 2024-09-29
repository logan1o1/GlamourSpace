import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database");
    } catch (error) {
        console.log("Unable to connect to the database", error);
    }
}

export default connectToDb;