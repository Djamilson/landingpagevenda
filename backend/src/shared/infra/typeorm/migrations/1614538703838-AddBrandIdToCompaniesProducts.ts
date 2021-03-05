import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddBrandIdToCompaniesProducts1614538703838
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies_products',
      new TableColumn({
        name: 'brand_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies_products',
      new TableForeignKey({
        name: 'BrandsCompaniesProducts',
        columnNames: ['brand_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'brands',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'companies_products',
      'BrandsCompaniesProducts',
    );

    await queryRunner.dropColumn('companies_products', 'brand_id');
  }
}
