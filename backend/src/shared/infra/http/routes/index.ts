import { Router } from 'express';

import citiesRouter from '@modules/locality/infra/http/routes/cities.routes';
import statesRouter from '@modules/locality/infra/http/routes/states.routes';
import trufashopRouter from '@modules/trufaShop/trufashop.routes';
import addressesRouter from '@modules/users/infra/http/routes/addresses.routes';
import groupsRouter from '@modules/users/infra/http/routes/groups.routes';
import infoClientsRouter from '@modules/users/infra/http/routes/infoclients.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import personsRouter from '@modules/users/infra/http/routes/persons.routes';
import phonesRouter from '@modules/users/infra/http/routes/phones.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/groups', groupsRouter);

routes.use('/info/clients', infoClientsRouter);
routes.use('/addresses', addressesRouter);
routes.use('/phones', phonesRouter);
routes.use('/persons', personsRouter);

routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

routes.use('/cities', citiesRouter);
routes.use('/states', statesRouter);

/*= =====================brands==================== */
routes.use('/trufashop', trufashopRouter);

/*= =======================end brands====================== */

export default routes;
