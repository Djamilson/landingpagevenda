import { injectable, inject } from 'tsyringe';

// import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import AppError from '@shared/errors/AppError';

import Company from '../infra/typeorm/entities/Company';
import ICompaniesAddressesRepository from '../repositories/ICompaniesAddressesRepository';
import ICompaniesPhonesRepository from '../repositories/ICompaniesPhonesRepository';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IResponse {
  commercial_name: string;
  fantasy_name: string;

  company_branch_id: string;
  cnpj: string;
  email: string;

  number: string;
  street: string;
  complement: string;
  neighborhood: string;
  zip_code: string;
  city_id: string;

  phone: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,

    @inject('CompaniesPhonesRepository')
    private companiesPhonesRepository: ICompaniesPhonesRepository,

    @inject('CompaniesAddressesRepository')
    private companiesAddressesRepository: ICompaniesAddressesRepository,
  ) {}

  public async execute({
    commercial_name,
    fantasy_name,
    company_branch_id,
    cnpj,
    email,

    number,
    street,
    complement,
    neighborhood,
    zip_code,
    city_id,

    phone,
  }: IResponse): Promise<Company> {
    console.log(
      '',
      commercial_name,
      fantasy_name,
      company_branch_id,
      cnpj,
      email,

      number,
      street,
      complement,
      neighborhood,
      zip_code,
      city_id,

      phone,
    );
    const checkUserExists = await this.companiesRepository.findByEmail(email);
    console.log('1');
    if (checkUserExists) {
      throw new AppError('Email already used.');
    }

    const checkCompanyExists = await this.companiesRepository.findByCnpj(cnpj);
    console.log('2');
    if (checkCompanyExists) {
      throw new AppError('Company already used.');
    }

    const company = await this.companiesRepository.create({
      commercial_name,
      fantasy_name,
      email,
      cnpj,
      company_branch_id,
    });
    console.log('3');
    const { id } = company;
    const serializable = { phone, company_id: company.id };

    const checkPhoneExists = await this.companiesPhonesRepository.findByPhone(
      serializable,
    );
    console.log('4');
    if (checkPhoneExists) {
      await this.companiesRepository.delete(id);
      throw new AppError('Phone already used.');
    }

    const newPhone = await this.companiesPhonesRepository.create(serializable);

    const addressSerealizable = {
      number: Number(number),
      street,
      complement,
      zip_code,
      neighborhood,
      city_id,
    };

    const address = await this.companiesAddressesRepository.create(
      addressSerealizable,
    );

    company.phone = newPhone;
    company.address_id = address.id;

    await this.companiesRepository.save(company);

    return company;
  }
}

export default CreateUserService;
