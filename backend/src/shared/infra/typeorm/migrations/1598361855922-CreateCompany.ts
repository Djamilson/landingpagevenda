import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCourses1598361855922 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'commercial_name',
            type: 'varchar',
          },
          {
            name: 'fantasy_name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'status',
            type: 'boolean',
            default: true,
          },
          {
            name: 'cnpj',
            type: 'varchar',
            isNullable: true,
            isUnique: true,
          },

          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'logo',
            type: 'varchar',
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
    await queryRunner.dropTable('companies');
  }
}
