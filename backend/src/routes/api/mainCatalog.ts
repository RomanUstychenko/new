import { Router, Request, Response } from 'express';


import { validate, authenticate } from '../../middlewares';
import { schemas } from '../../models/mainCatalog';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import { listMainCatalog, addMainCatalog } from '../../controllers/mainCatalog';

const router = Router();

router.get("/", authenticate, ctrlWrapper(listMainCatalog));

router.post("/", authenticate, validate(schemas.addSchema), ctrlWrapper(addMainCatalog)
  );

export default router;

