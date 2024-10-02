import Furniture from "../schema/furniture.model.js";

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
        const models = await Furniture.find()
        resp.status(200).json(models);
    } catch (error) {
        next(error)
    }
}