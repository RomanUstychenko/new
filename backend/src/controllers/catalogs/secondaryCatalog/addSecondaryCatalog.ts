import { Request, Response, NextFunction } from "express";
import { Catalog, ICatalog } from "../../../models/catalog";

interface CustomRequest extends Request {
  user?: {
    _id: string;
  };
}

const addSecondaryCatalog = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { _id: owner } = req.user!;
    const { mainCatalog } = req.params;
console.log("owner", owner)
console.log("mainCatalog", mainCatalog)
    // Використання типізації для req.body, якщо у вас є тип ISection
    const result: ICatalog = await Catalog.create({ ...req.body, owner, type: "secondary", mainCatalog });
console.log("result", result)
    res.status(201).json(result);
  } catch (error) {
    next(error); // Обробка помилок
  }
};

export default addSecondaryCatalog;