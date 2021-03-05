import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

import Company from '../infra/typeorm/entities/Company';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IRequest {
  company_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateCompanyAvatarService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    company_id,
    avatarFilename,
  }: IRequest): Promise<Company> {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new AppError('Only authenticated company can change avatar.', 401);
    }

    if (company.avatar) {
      await this.storageProvider.deleteFile(company.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    company.avatar = filename;

    await this.companiesRepository.save(company);

    return company;
  }
}

export default UpdateCompanyAvatarService;
