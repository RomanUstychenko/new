
import { Request, Response, NextFunction } from 'express';

const ctrlWrapper = <Req extends Request>(
  ctrl: (req: Req, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Req, res: Response, next: NextFunction): Promise<void> => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default ctrlWrapper;