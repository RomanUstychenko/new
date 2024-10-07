import { Request, Response, NextFunction } from "express";
import { Catalog, ICatalog } from "../../../models/catalog";

interface CustomRequest extends Request {
  user?: {
    _id: string;
  };
}

const listMainCatalog = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { _id: owner } = req.user!;
console.log("owner", owner)  /// все вірно
    const result: ICatalog[] = await Catalog.find({ owner, type: "main" }).populate("owner");

console.log("result", result)

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default listMainCatalog;