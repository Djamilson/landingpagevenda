import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticanted';

import CompaniesAddressesController from '../controllers/CompaniesAddressesController';

const companiesRouter = Router();
const companiesAddressesController = new CompaniesAddressesController();

companiesRouter.use(ensureAuthenticated);

companiesRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      number: Joi.string().required(),
      street: Joi.string().required(),
      complement: Joi.string(),
      neighborhood: Joi.string().required(),
      zip_code: Joi.string().required(),
      city_id: Joi.string().required(),
    },
  }),
  companiesAddressesController.update,
);

export default companiesRouter;
