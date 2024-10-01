import { Router, Request, Response } from 'express';


import { validate, authenticate } from '../../middlewares';
import { schemas } from '../../models/mainCatalog';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import { listMainCatalog, addMainCatalog } from '../../controllers/catalogs/mainCatalog';
import { addSecondaryCatalog, listSecondaryCatalog } from '../../controllers/catalogs/secondaryCatalog';

const router = Router();

router.get("/", authenticate, ctrlWrapper(listMainCatalog));
router.post("/", authenticate, validate(schemas.addSchema), ctrlWrapper(addMainCatalog)
  );

  router.get("/:mainCatalog", authenticate, ctrlWrapper(listSecondaryCatalog));
  router.post("/:mainCatalog", authenticate, validate(schemas.addSchema), ctrlWrapper(addSecondaryCatalog));
export default router;

