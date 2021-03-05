import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddOffersIdToCompaniesOffersProducts1614534873874
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies_offers_products',
      new TableColumn({
        name: 'offer_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies_offers_products',
      new TableForeignKey({
        name: 'CompaniesOffersProducts',
        columnNames: ['offer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'offers',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'companies_offers_products',
      'CompaniesOffersProducts',
    );

    await queryRunner.dropColumn('companies_offers_products', 'offer_id');
  }
}
