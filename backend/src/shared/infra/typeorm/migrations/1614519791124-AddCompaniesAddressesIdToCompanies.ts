import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddCompaniesAddressesIdToCompanies1614519791124
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies',
      new TableColumn({
        name: 'address_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies',
      new TableForeignKey({
        name: 'CompaniesCompaniesAddresses',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies_addresses',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'companies',
      'CompaniesCompaniesAddresses',
    );

    await queryRunner.dropColumn('companies', 'address_id');
  }
}
