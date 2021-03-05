import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Brand from '../infra/typeorm/entities/Brand';
import IBrandsRepository from '../repositories/IBrandsRepository';

interface IRequest {
  brand_id: string;
  name: string;
}

@injectable()
class UpdateBrandsService {
  constructor(
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  public async execute({ brand_id, name }: IRequest): Promise<Brand> {
    console.log('brand_id, name', brand_id, name);
    const brand = await this.brandsRepository.findById(brand_id);
    console.log('brand:', brand);

    if (!brand) {
      throw new AppError(' Not exist brand.', 401);
    }

    brand.name = name;

    return this.brandsRepository.save(brand);
  }
}

export default UpdateBrandsService;
