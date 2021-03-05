import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddCityIdToCompaniesAddresses1614522375065
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies_addresses',
      new TableColumn({
        name: 'city_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies_addresses',
      new TableForeignKey({
        name: 'CitiesCompaniesAddresses',
        columnNames: ['city_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cities',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'companies_addresses',
      'CitiesCompaniesAddresses',
    );

    await queryRunner.dropColumn('companies_addresses', 'city_id');
  }
}
