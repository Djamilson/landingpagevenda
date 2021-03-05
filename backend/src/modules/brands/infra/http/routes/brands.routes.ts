import { Router } from 'express';
import multer from 'multer';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticanted';

import uploadConfig from '@config/upload';

import BrandsController from '../controllers/BrandsController';
import BrandsImageController from '../controllers/BrandsImageController';

const upload = multer(uploadConfig.multer);

const brandsRouter = Router();

const brandsController = new BrandsController();
const brandsImageController = new BrandsImageController();

brandsRouter.use(ensureAuthenticated);

brandsRouter.post('/', upload.single('file'), brandsController.create);
brandsRouter.patch('/:brandId', brandsController.update);
brandsRouter.patch(
  '/:brandId/image',
  upload.single('file'),
  brandsImageController.update,
);
export default brandsRouter;
