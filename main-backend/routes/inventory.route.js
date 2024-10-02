import express from "express";
import {getModels, uploadModels } from "../controllers/inventory.controller.js";

const inventoryRouter = express.Router();

inventoryRouter.post("/uploadModels", uploadModels);
inventoryRouter.get("/getModels", getModels);

export default inventoryRouter;