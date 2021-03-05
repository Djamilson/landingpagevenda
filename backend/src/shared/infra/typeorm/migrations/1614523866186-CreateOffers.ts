import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOffers1614523866186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'offers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'boolean',
            default: false,
          },
          {
            name: 'canceled_at',
            type: 'timestamp',
            isNullable: true,
          },

          {
            name: 'start_date',
            type: 'timestamp',
            isNullable: true,
          },

          {
            name: 'end_date',
            type: 'timestamp',
            isNullable: true,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('offers');
  }
}
