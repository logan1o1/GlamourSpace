import exp from "express";
import connectToDb from "./main-backend/db/connectMongodb.js";
import dotenv from "dotenv";


dotenv.config();
const PORT = process.env.PORT || 4000

const app = exp();
app.use(exp.json());

app.listen(4000, () => {
    connectToDb()
    console.log("app running on:",PORT);
});