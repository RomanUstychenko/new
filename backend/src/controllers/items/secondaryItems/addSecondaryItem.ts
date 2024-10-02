import { Request, Response, NextFunction } from "express";
import { Item, IItem } from "../../../models/item";

interface CustomRequest extends Request {
  user?: {
    _id: string;
  };
}

const addSecondaryItem = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { _id: owner } = req.user!;
    const { catalog } = req.params;
console.log("owner", owner)
console.log("catalog", catalog)
    const result: IItem = await Item.create({ ...req.body, owner, type: "secondary", catalog });
console.log("result", result)
    res.status(201).json(result);
  } catch (error) {
    next(error); 
  }
};

export default addSecondaryItem;