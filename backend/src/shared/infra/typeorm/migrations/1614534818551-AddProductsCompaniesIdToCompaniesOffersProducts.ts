import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddProductsCompaniesIdToProductsCompaniesOffers1614534818551
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies_offers_products',
      new TableColumn({
        name: 'company_product_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies_offers_products',
      new TableForeignKey({
        name: 'CompaniesOffersProductsCompaniesProducts',
        columnNames: ['company_product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies_products',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'companies_offers_products',
      'CompaniesOffersProductsCompaniesProducts',
    );

    await queryRunner.dropColumn(
      'companies_offers_products',
      'company_product_id',
    );
  }
}
