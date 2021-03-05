import { MigrationInterface, QueryRunner } from 'typeorm';

import {
  cities,
  person,
  user,
  usersGroups,
  states,
  groups,
} from '../dataDefault';

export class InitiDataDefault1613347916785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // insert data static
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('groups')
      .values(groups)
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('states')
      .values(states)
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('persons')
      .values(person)
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('users')
      .values(user)
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('users_groups')
      .values(usersGroups)
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('cities')
      .values(cities)
      .execute();
  }

  public async down(): Promise<void> {}
}
