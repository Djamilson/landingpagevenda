import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddAddCompaniesPhonesIdToCompanies1614519717507
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies',
      new TableColumn({
        name: 'phone_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies',
      new TableForeignKey({
        name: 'CompaniesCompaniesPhones',
        columnNames: ['phone_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies_phones',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('companies', 'CompaniesCompaniesPhones');

    await queryRunner.dropColumn('companies', 'phone_id');
  }
}
