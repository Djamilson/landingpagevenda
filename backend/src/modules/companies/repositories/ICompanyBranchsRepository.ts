import ICreateCompanyBranchDTO from '../dtos/ICreateCompanyBranchDTO';
import CompanyBranch from '../infra/typeorm/entities/CompanyBranch';

export default interface ICompanyBranchsRepository {
  findById(id: string): Promise<CompanyBranch | undefined>;
  findByName(name: string): Promise<CompanyBranch | undefined>;
  create(data: ICreateCompanyBranchDTO): Promise<CompanyBranch>;
  save(companyBranch: CompanyBranch): Promise<CompanyBranch>;
  delete(id: string): Promise<void>;
}
