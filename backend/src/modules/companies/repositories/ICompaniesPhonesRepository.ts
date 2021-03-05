import ICreatePhoneDTO from '../dtos/ICreatePhoneDTO';
import Phone from '../infra/typeorm/entities/CompanyPhone';

export default interface ICompaniesPhonesRepository {
  findAllPhonesToCompanyId(id: string): Promise<Phone[] | undefined>;
  findByPhone(data: ICreatePhoneDTO): Promise<Phone | undefined>;
  findById(id: string): Promise<Phone | undefined>;

  createListPhone(phones: ICreatePhoneDTO[]): Promise<Phone[]>;
  create(data: ICreatePhoneDTO): Promise<Phone>;
  save(phone: Phone): Promise<Phone>;
  delete(id: string): Promise<void>;
}
