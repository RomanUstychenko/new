import { Request, Response, NextFunction } from "express";
import { MainCatalog, IMainCatalog } from "../../../models/mainCatalog";

interface CustomRequest extends Request {
  user?: {
    _id: string;
  };
}

const listSecondaryCatalog = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { _id: owner } = req.user!;
    const { mainCatalog } = req.params;

console.log("owner", owner)  /// все вірно
console.log("mainCatalog", mainCatalog)
    const result: IMainCatalog[] = await MainCatalog.find({ owner, type: "secondary", mainCatalog }).populate("owner");



    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default listSecondaryCatalog;