import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticanted';

import CompanyBranchsController from '../controllers/CompanyBranchsController';

const companyBranchsRouter = Router();
const companyBranchsController = new CompanyBranchsController();

companyBranchsRouter.use(ensureAuthenticated);

companyBranchsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  companyBranchsController.create,
);

export default companyBranchsRouter;
