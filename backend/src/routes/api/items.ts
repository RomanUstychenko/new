import { Router, Request, Response } from 'express';


import { validate, authenticate } from '../../middlewares';
import { schemas } from '../../models/item';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import { listMainItems, addMainItem } from '../../controllers/items/mainItems';

const router = Router();

router.get("/:catalog", authenticate, ctrlWrapper(listMainItems));
router.post("/:catalog", authenticate, validate(schemas.addSchema), ctrlWrapper(addMainItem))





export default router;