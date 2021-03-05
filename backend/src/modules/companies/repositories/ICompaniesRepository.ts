import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';
import Company from '../infra/typeorm/entities/Company';

export default interface ICompaniesRepository {
  findByCnpj(cnpj: string): Promise<Company | undefined>;
  findById(id: string): Promise<Company | undefined>;
  findByEmail(email: string): Promise<Company | undefined>;
  create(data: ICreateCompanyDTO): Promise<Company>;
  save(company: Company): Promise<Company>;
  delete(id: string): Promise<void>;
}
