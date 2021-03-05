import { injectable, inject } from 'tsyringe';

// import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import AppError from '@shared/errors/AppError';

import CompanyBranch from '../infra/typeorm/entities/CompanyBranch';
import ICompanyBranchsRepository from '../repositories/ICompanyBranchsRepository';

interface IResponse {
  name: string;
}

@injectable()
class CreateCompanyBranchService {
  constructor(
    @inject('CompanyBranchsRepository')
    private companyBranchsRepository: ICompanyBranchsRepository,
  ) {}

  public async execute({ name }: IResponse): Promise<CompanyBranch> {
    const checkBranchExists = await this.companyBranchsRepository.findByName(
      name,
    );
    console.log('1');
    if (checkBranchExists) {
      throw new AppError('Branch already used.');
    }

    const branch = await this.companyBranchsRepository.create({
      name,
    });

    return branch;
  }
}

export default CreateCompanyBranchService;
