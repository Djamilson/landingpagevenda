import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticanted';

import CompaniesController from '../controllers/CompaniesController';

const companiesRouter = Router();
const companiesController = new CompaniesController();

companiesRouter.use(ensureAuthenticated);

companiesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      commercial_name: Joi.string().required(),
      fantasy_name: Joi.string(),

      company_branch_id: Joi.string().required(),
      cnpj: Joi.string().required(),
      email: Joi.string().required(),

      number: Joi.string().required(),
      street: Joi.string().required(),
      complement: Joi.string().required(),
      neighborhood: Joi.string().required(),
      zip_code: Joi.string().required(),
      city_id: Joi.string().required(),

      phone: Joi.string().required(),
    },
  }),
  companiesController.create,
);

export default companiesRouter;
