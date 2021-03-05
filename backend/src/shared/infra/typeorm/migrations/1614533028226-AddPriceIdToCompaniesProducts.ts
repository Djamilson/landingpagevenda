import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddPriceIdToProductsCompanies1614533028226
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies_products',
      new TableColumn({
        name: 'price_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies_products',
      new TableForeignKey({
        name: 'PriceCompaniesProducts',
        columnNames: ['price_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'prices',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'companies_products',
      'PriceCompaniesProducts',
    );

    await queryRunner.dropColumn('companies_products', 'price_id');
  }
}
