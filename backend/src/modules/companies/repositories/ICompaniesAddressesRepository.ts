import ICreateAddressDTO from '../dtos/ICreateAddressDTO';
import Address from '../infra/typeorm/entities/CompanyAddress';

export default interface IAddressesRepository {
  findById(id: string): Promise<Address | undefined>;
  create(data: ICreateAddressDTO): Promise<Address>;
  save(address: Address): Promise<Address>;
  delete(id: string): Promise<void>;
}
