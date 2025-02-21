import Furniture from "../schema/furniture.model.js";
import Reqmodels from "../schema/reqModels.model.js";

export const uploadModels = async (req, resp, next) => {
    try {
        const model = await Furniture.create(req.body)
        resp.status(201).json(model);
    } catch (error) {
        next(error)
    }
}

export const getModels = async (req, resp, next) => {
    try {
        const models = await Furniture.find();
        resp.status(200).json(models);
    } catch (error) {
        next(error)
    }
}

export const reqModel = async (req, resp, next) => {
    try {
        const requests = await Reqmodels.create(req.body);
        resp.status(200).json(requests);
    } catch (error) {
        next(error)
    }
}

export const getReqModels = async (req, resp, next) => {
    try {
        const reqModels = await Reqmodels.find();
        resp.status(200).json(reqModels) 
    } catch (error) {
        next(error)
    }
}