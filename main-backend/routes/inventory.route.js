import express from "express";
import { uploadModels } from "../controllers/inventory.controller.js";

const inventoryRouter = express.Router();

inventoryRouter.post("/uploadModels", uploadModels);

export default inventoryRouter;