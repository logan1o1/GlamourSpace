import express from "express";
import {getModels, reqModel, uploadModels } from "../controllers/inventory.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const inventoryRouter = express.Router();

inventoryRouter.post("/uploadModels", uploadModels);
inventoryRouter.get("/getModels", getModels);
inventoryRouter.post("reqModel", verifyToken, reqModel)

export default inventoryRouter;