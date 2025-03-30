import express from "express";
import {completeReqModel, getModels, getReqModels, reqModel, uploadModels } from "../controllers/inventory.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const inventoryRouter = express.Router();

inventoryRouter.post("/uploadModels", uploadModels);
inventoryRouter.get("/getModels", getModels);
inventoryRouter.post("/reqModel", reqModel);
inventoryRouter.get("/getReqModels", getReqModels);
inventoryRouter.put("/completeReqModel/:id", completeReqModel);

export default inventoryRouter;