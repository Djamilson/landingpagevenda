import { injectable, inject } from 'tsyringe';

// import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

import Brand from '../infra/typeorm/entities/Brand';
import IBrandsRepository from '../repositories/IBrandsRepository';

interface IResponse {
  name: string;
  image: string;
}

@injectable()
class CreateBrandService {
  constructor(
    @inject('BrandsRepository')
    private BrandsRepository: IBrandsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ name, image }: IResponse): Promise<Brand> {
    const checkBranchExists = await this.BrandsRepository.findByName(name);
    console.log('1', name, image);
    if (checkBranchExists) {
      throw new AppError('Branch already used.');
    }

    if (image) {
      await this.storageProvider.deleteFile(image);
    }

    const filename = await this.storageProvider.saveFile(image);

    const branch = await this.BrandsRepository.create({
      name,
      image: filename,
    });

    return branch;
  }
}

export default CreateBrandService;
