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

export const completeReqModel = async (req, resp, next) => {
    try {
    const validProduct = await Reqmodels.findById(req.params.id);
    if (!validProduct) return next(handleError(404, "Product not found"));
        
    const completedReq = await Reqmodels.findByIdAndUpdate(req.params.id, {
        $set: {
            file: req.body.file,
            completed: true
        }
    }, {new: true});
    resp.status(200).json(completedReq);
    } catch (error) {
     next(error)   
    }
}