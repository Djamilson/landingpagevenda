import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import CompaniesAddressesRepository from '@modules/companies/infra/typeorm/repositories/CompaniesAddressesRepository';
import CompaniesPhonesRepository from '@modules/companies/infra/typeorm/repositories/CompaniesPhonesRepository';
import CompaniesRepository from '@modules/companies/infra/typeorm/repositories/CompaniesRepository';
import CompanyBranchsRepository from '@modules/companies/infra/typeorm/repositories/CompanyBranchsRepository';
import ICompaniesAddressesRepository from '@modules/companies/repositories/ICompaniesAddressesRepository';
import ICompaniesPhonesRepository from '@modules/companies/repositories/ICompaniesPhonesRepository';
import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRepository';
import ICompanyBranchsRepository from '@modules/companies/repositories/ICompanyBranchsRepository';
import CitiesRepository from '@modules/locality/infra/typeorm/repositories/CitiesRepository';
import StatesRepository from '@modules/locality/infra/typeorm/repositories/StatesRepository';
import ICitiesRepository from '@modules/locality/repositories/ICitiesRepository';
import IStatesRepository from '@modules/locality/repositories/IStatesRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import AddressesRepository from '@modules/users/infra/typeorm/repositories/AddressesRepository';
import GroupsRepository from '@modules/users/infra/typeorm/repositories/GroupsRepository';
import PersonsRepository from '@modules/users/infra/typeorm/repositories/PersonsRepository';
import PhonesRepository from '@modules/users/infra/typeorm/repositories/PhonesRepository';
import UsersGroupsRepository from '@modules/users/infra/typeorm/repositories/UsersGroupsRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import IAddressesRepository from '@modules/users/repositories/IAddressesRepository';
import IGroupsRepository from '@modules/users/repositories/IGroupsRepository';
import IPersonsRepository from '@modules/users/repositories/IPersonsRepository';
import IPhonesRepository from '@modules/users/repositories/IPhonesRepository';
import IUsersGroupsRepository from '@modules/users/repositories/IUsersGroupsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IAddressesRepository>(
  'AddressesRepository',
  AddressesRepository,
);

container.registerSingleton<IPersonsRepository>(
  'PersonsRepository',
  PersonsRepository,
);

container.registerSingleton<IStatesRepository>(
  'StatesRepository',
  StatesRepository,
);
container.registerSingleton<ICitiesRepository>(
  'CitiesRepository',
  CitiesRepository,
);

container.registerSingleton<IPhonesRepository>(
  'PhonesRepository',
  PhonesRepository,
);

container.registerSingleton<IUsersGroupsRepository>(
  'UsersGroupsRepository',
  UsersGroupsRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IGroupsRepository>(
  'GroupsRepository',
  GroupsRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<ICompaniesPhonesRepository>(
  'CompaniesPhonesRepository',
  CompaniesPhonesRepository,
);

container.registerSingleton<ICompaniesAddressesRepository>(
  'CompaniesAddressesRepository',
  CompaniesAddressesRepository,
);

container.registerSingleton<ICompanyBranchsRepository>(
  'CompanyBranchsRepository',
  CompanyBranchsRepository,
);
