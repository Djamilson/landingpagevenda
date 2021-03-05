import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddSectionIdToCompaniesProducts1614538077450
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies_products',
      new TableColumn({
        name: 'section_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies_products',
      new TableForeignKey({
        name: 'SectionsCompaniesProducts',
        columnNames: ['section_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sections',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'companies_products',
      'SectionsCompaniesProducts',
    );

    await queryRunner.dropColumn('companies_products', 'section_id');
  }
}
