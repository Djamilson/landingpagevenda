import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddCompanyProductIdToPrices1614533369047
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'prices',
      new TableColumn({
        name: 'company_product_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'prices',
      new TableForeignKey({
        name: 'PricesCompaniesProducts',
        columnNames: ['company_product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies_products',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('prices', 'PricesCompaniesProducts');

    await queryRunner.dropColumn('prices', 'company_product_id');
  }
}
