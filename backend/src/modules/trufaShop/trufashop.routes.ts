import { Router } from 'express';

import SheetsController from './SheetsController';
import TrufaShopController from './TrufaShopController';

const trufaShopRouter = Router();

const trufaShopController = new TrufaShopController();
const sheetsController = new SheetsController();

trufaShopRouter.get('/token', trufaShopController.create);
trufaShopRouter.get('/sheets', sheetsController.create);
trufaShopRouter.get('/sheets/update', sheetsController.update);

export default trufaShopRouter;
