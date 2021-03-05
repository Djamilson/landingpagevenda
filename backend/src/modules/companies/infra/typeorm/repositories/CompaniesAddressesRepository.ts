import { getRepository, Repository } from 'typeorm';

import ICreateAddressDTO from '@modules/companies/dtos/ICreateAddressDTO';
import ICompaniesAddressesRepository from '@modules/companies/repositories/ICompaniesAddressesRepository';

import Address from '../entities/CompanyAddress';

class CompaniesAddressesRepository implements ICompaniesAddressesRepository {
  private ormAddressRepository: Repository<Address>;

  constructor() {
    this.ormAddressRepository = getRepository(Address);
  }

  public async findById(id: string): Promise<Address | undefined> {
    console.log('id:==================', id);
    const address = await this.ormAddressRepository.findOne(id, {
      relations: ['city', 'city.state'],
    });

    console.log('id:::', id);

    return address;
  }

  public async create(address: ICreateAddressDTO): Promise<Address> {
    const newAddress = await this.ormAddressRepository.create(address);

    await this.ormAddressRepository.save(newAddress);

    return newAddress;
  }

  public async save(address: Address): Promise<Address> {
    return this.ormAddressRepository.save(address);
  }

  public async delete(id: string): Promise<void> {
    await this.ormAddressRepository.delete(id);
  }
}

export default CompaniesAddressesRepository;
