import { Request, Response, NextFunction } from "express";
import { Item, IItem } from "../../../models/item";
interface CustomRequest extends Request {
  user?: {
    _id: string;
  };
}

const listSecondaryItems = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { _id: owner } = req.user!;
    const { catalog } = req.params;
    const result: IItem[] = await Item.find({ owner, type: "secondary", catalog }).populate("owner");

console.log("result", result)

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default listSecondaryItems;