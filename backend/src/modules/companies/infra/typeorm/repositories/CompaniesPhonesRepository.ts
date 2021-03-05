import { getRepository, Repository } from 'typeorm';

import ICreatePhoneDTO from '@modules/companies/dtos/ICreatePhoneDTO';
import ICompaniesPhonesRepository from '@modules/companies/repositories/ICompaniesPhonesRepository';

import Phone from '../entities/CompanyPhone';

class CompaniesPhonesRepository implements ICompaniesPhonesRepository {
  private ormPhoneRepository: Repository<Phone>;

  constructor() {
    this.ormPhoneRepository = getRepository(Phone);
  }

  public async findAllPhonesToCompanyId(
    id: string,
  ): Promise<Phone[] | undefined> {
    const phone = this.ormPhoneRepository.find({
      where: { company_id: id },
    });

    return phone;
  }

  public async findById(id: string): Promise<Phone | undefined> {
    const phone = await this.ormPhoneRepository.findOne(id);

    return phone;
  }

  public async findByPhone(data: ICreatePhoneDTO): Promise<Phone | undefined> {
    console.log('My Phony', data);
    const phone = await this.ormPhoneRepository.findOne({
      where: { ...data },
    });

    console.log('phone My Phony', phone);
    return phone;
  }

  public async create(phone: ICreatePhoneDTO): Promise<Phone> {
    const newPhone = this.ormPhoneRepository.create(phone);

    await this.ormPhoneRepository.save(newPhone);

    return newPhone;
  }

  public async save(phone: Phone): Promise<Phone> {
    return this.ormPhoneRepository.save(phone);
  }

  public async createListPhone(phones: ICreatePhoneDTO[]): Promise<Phone[]> {
    return this.ormPhoneRepository.save(phones);
  }

  public async delete(id: string): Promise<void> {
    await this.ormPhoneRepository.delete(id);
  }
}

export default CompaniesPhonesRepository;
