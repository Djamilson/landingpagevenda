import { getRepository, Repository } from 'typeorm';

import ICreateCompanyBranchDTO from '@modules/companies/dtos/ICreateCompanyBranchDTO';
import ICompanyBranchsRepository from '@modules/companies/repositories/ICompanyBranchsRepository';

import CompanyBranch from '../entities/CompanyBranch';

class CompanyBranchsRepository implements ICompanyBranchsRepository {
  private ormCompanyBranchRepository: Repository<CompanyBranch>;

  constructor() {
    this.ormCompanyBranchRepository = getRepository(CompanyBranch);
  }

  public async findByName(name: string): Promise<CompanyBranch | undefined> {
    const companyBranch = await this.ormCompanyBranchRepository.findOne({
      name,
    });

    return companyBranch;
  }

  public async findById(id: string): Promise<CompanyBranch | undefined> {
    const company = await this.ormCompanyBranchRepository.findOne(id);

    return company;
  }

  public async findByEmail(email: string): Promise<CompanyBranch | undefined> {
    const company = await this.ormCompanyBranchRepository.findOne({
      where: { email },
    });

    return company;
  }

  public async create(
    companyBranch: ICreateCompanyBranchDTO,
  ): Promise<CompanyBranch> {
    const branch = await this.ormCompanyBranchRepository.create(companyBranch);

    await this.ormCompanyBranchRepository.save(branch);

    return branch;
  }

  public async save(companyBranch: CompanyBranch): Promise<CompanyBranch> {
    return this.ormCompanyBranchRepository.save(companyBranch);
  }

  public async delete(id: string): Promise<void> {
    await this.ormCompanyBranchRepository.delete(id);
  }
}

export default CompanyBranchsRepository;
