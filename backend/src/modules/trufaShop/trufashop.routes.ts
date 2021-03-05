import { Router } from 'express';

import TrufaShopController from './TrufaShopController';

const trufaShopRouter = Router();

const trufaShopController = new TrufaShopController();

trufaShopRouter.get('/token', trufaShopController.create);

export default trufaShopRouter;
