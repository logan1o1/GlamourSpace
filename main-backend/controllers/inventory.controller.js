import Furniture from "../schema/furniture.model.js";

export const uploadModels = async (req, resp, next) => {
    try {
        const model = await Furniture.create(req.body)
        resp.status(201).json(model);
    } catch (error) {
        next(error)
    }
}