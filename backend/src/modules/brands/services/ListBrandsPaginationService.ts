import { inject, injectable } from 'tsyringe';

import Brand from '../infra/typeorm/entities/Brand';
import IBrandsRepository from '../repositories/IBrandsRepository';

interface IBrand {
  name: string;
}

interface IRequest {
  page: number;
  pageSize: number;
  query: string;
}

interface ICityReturn {
  cities: IBrand[] | undefined;

  cityInfo: {
    page: number;
    pages: number;
    total: number;
    limit: number;
  };
}

@injectable()
class ListBrandsPaginationService {
  constructor(
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  public async execute({
    page,
    pageSize,
    query,
  }: IRequest): Promise<ICityReturn | undefined> {
    const {
      result,
      total,
    } = await this.brandsRepository.findAllBrandPagination({
      page,
      pageSize,
      query,
    });
    const pages = Math.ceil(total / pageSize);

    const cityInfo = { page, pages, total, limit: pageSize };

    const options = result?.map((city: City) => ({
      value: city.id,
      label: city.name,
    }));

    return { cities: options, cityInfo };
  }
}

export default ListBrandsPaginationService;
