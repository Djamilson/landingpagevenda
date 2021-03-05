import { Exclude, Expose } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import uploadConfig from '@config/upload';

import CompanyBranch from './CompanyBranch';
import CompanyPhone from './CompanyPhone';

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  commercial_name: string;

  @Column()
  fantasy_name: string;

  @Column()
  email: string;

  @Column()
  cnpj: string;

  @Column()
  status: boolean;

  @Column()
  avatar: string;

  @Column()
  logo: string;

  @OneToOne(() => CompanyPhone)
  @JoinColumn({ name: 'phone_id' })
  phone: CompanyPhone;

  @OneToOne(() => CompanyBranch)
  @JoinColumn({ name: 'company_branch_id' })
  companyBranch: CompanyBranch;

  @Column()
  company_branch_id: string;

  @Column()
  phone_id: string;

  @Column()
  address_id: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }
    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_URL_BACKEND}/files/${this.avatar}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
      default:
        return null;
    }
  }

  @Expose({ name: 'logo_url' })
  getLogoUrl(): string | null {
    if (!this.logo) {
      return null;
    }
    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_URL_BACKEND}/files/${this.logo}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.logo}`;
      default:
        return null;
    }
  }
}

export default Company;
