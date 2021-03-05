import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCompaniesPlans1614530325864
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies_plans',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'free_trial_at',
            type: 'timestamp',
            default: `now() + interval '30 day'`,
          },

          {
            name: 'start_date',
            type: 'timestamp',
            isNullable: true,
          },

          {
            name: 'end_date',
            type: 'timestamp',
            isNullable: true,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies_plans');
  }
}
