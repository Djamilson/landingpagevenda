import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddPlanIdToCompaniesPlans1614530958567
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies_plans',
      new TableColumn({
        name: 'plan_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'companies_plans',
      new TableForeignKey({
        name: 'PlanCompaniesPlans',
        columnNames: ['plan_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'plans',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('companies_plans', 'PlanCompaniesPlans');

    await queryRunner.dropColumn('companies_plans', 'plan_id');
  }
}
