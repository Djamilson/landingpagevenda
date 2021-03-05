import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAddressesCompanies1614519630546
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies_addresses',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'number',
            type: 'int',
          },
          {
            name: 'street',
            type: 'varchar',
          },

          {
            name: 'complement',
            type: 'varchar',
          },

          {
            name: 'zip_code',
            type: 'varchar',
          },

          {
            name: 'neighborhood',
            type: 'varchar',
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
    await queryRunner.dropTable('companies_addresses');
  }
}
