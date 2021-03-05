import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import City from '../../../../locality/infra/typeorm/entities/City';

@Entity('companies_addresses')
class CompanyAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  number: number;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  zip_code: string;

  @Column()
  neighborhood: string;

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Column()
  city_id: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}

export default CompanyAddress;
