import exp from "express";
import connectToDb from "./main-backend/db/connectMongodb.js";
import dotenv from "dotenv";
import inventoryRouter from "./main-backend/routes/inventory.route.js";
import cors from "cors";


dotenv.config();
const PORT = process.env.PORT || 4000

const app = exp();
app.use(exp.json());

const corsOptions = {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOptions))



app.use("/api/inventory", inventoryRouter);

app.listen(PORT, () => {
    connectToDb()
    console.log("app running on:",PORT);
});

app.use((err, req, resp, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"
    return resp.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})