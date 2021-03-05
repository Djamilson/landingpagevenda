import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '../../../../users/infra/http/middleware/ensureAuthenticanted';
import CompanyLogoController from '../controllers/CompanyLogoController';

const companyRouter = Router();
const companyLogoController = new CompanyLogoController();

companyRouter.use(ensureAuthenticated);

const upload = multer(uploadConfig.multer);

companyRouter.patch(
  '/:companyId/logo',
  ensureAuthenticated,
  upload.single('file'),
  companyLogoController.update,
);

export default companyRouter;
