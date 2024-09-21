import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

import HttpError from '../helpers/httpError';

const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(404, error.message));
    }
    next();
  };
};

export default validate;