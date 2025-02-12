import exp from "express";
import connectToDb from "./main-backend/db/connectMongodb.js";
import dotenv from "dotenv";
import inventoryRouter from "./main-backend/routes/inventory.route.js";
import cors from "cors";
import userRouter from "./main-backend/routes/users.route.js";
import feedbackRouter from "./main-backend/routes/feedback.route.js";
import path from 'path';


const __dirname = path.resolve()

dotenv.config();
const PORT = process.env.PORT || 6000

const app = exp();
app.use(exp.json());

const corsOptions = {
    origin: ["https://*", "http://*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOptions))



app.use("/api/inventory", inventoryRouter);
app.use("/api/user", userRouter);
app.use("/api/feedback", feedbackRouter);

app.use(exp.static(path.join(__dirname, "/GlamourSpace/dist")));
app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "GlamourSpace", "dist", "index.html"));
})

app.listen(PORT, () => {
    connectToDb()
    console.log("app running on:", PORT);
});

app.use((err, req, resp, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message  || "Internal Server Error"
    return resp.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})