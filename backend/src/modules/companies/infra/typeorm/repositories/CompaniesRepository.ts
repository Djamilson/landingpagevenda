import { getRepository, Repository } from 'typeorm';

import ICreateCompanyDTO from '@modules/companies/dtos/ICreateCompanyDTO';
import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRepository';

import Company from '../entities/Company';

class CompaniesRepository implements ICompaniesRepository {
  private ormCompanyRepository: Repository<Company>;

  constructor() {
    this.ormCompanyRepository = getRepository(Company);
  }

  public async findByCnpj(cnpj: string): Promise<Company | undefined> {
    const company = await this.ormCompanyRepository.findOne({ cnpj });

    return company;
  }

  public async findById(id: string): Promise<Company | undefined> {
    const company = await this.ormCompanyRepository.findOne(id);

    return company;
  }

  public async findByEmail(email: string): Promise<Company | undefined> {
    const company = await this.ormCompanyRepository.findOne({
      where: { email },
    });

    return company;
  }

  public async create(company: ICreateCompanyDTO): Promise<Company> {
    const newCompany = await this.ormCompanyRepository.create(company);

    await this.ormCompanyRepository.save(newCompany);

    return newCompany;
  }

  public async save(company: Company): Promise<Company> {
    return this.ormCompanyRepository.save(company);
  }

  public async delete(id: string): Promise<void> {
    await this.ormCompanyRepository.delete(id);
  }
}

export default CompaniesRepository;
