import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

import Company from '../infra/typeorm/entities/Company';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IRequest {
  company_id: string;
  logoFilename: string;
}

@injectable()
class UpdateCompanyLogoService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    company_id,
    logoFilename,
  }: IRequest): Promise<Company> {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new AppError('Only authenticated company can change avatar.', 401);
    }

    if (company.logo) {
      await this.storageProvider.deleteFile(company.logo);
    }

    const filename = await this.storageProvider.saveFile(logoFilename);

    company.logo = filename;

    await this.companiesRepository.save(company);

    return company;
  }
}

export default UpdateCompanyLogoService;
