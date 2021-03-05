import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '../../../../users/infra/http/middleware/ensureAuthenticanted';
import CompanyAvatarController from '../controllers/CompanyAvatarController';

const companyRouter = Router();
const companyAvatarController = new CompanyAvatarController();

const upload = multer(uploadConfig.multer);

companyRouter.use(ensureAuthenticated);

companyRouter.patch(
  '/:companyId/avatar',
  ensureAuthenticated,
  upload.single('file'),
  companyAvatarController.update,
);

export default companyRouter;
