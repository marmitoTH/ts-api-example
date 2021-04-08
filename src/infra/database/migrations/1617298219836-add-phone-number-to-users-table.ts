import { MigrationInterface, QueryRunner } from 'typeorm'

export class addPhoneNumberToUsersTable1617298219836
implements MigrationInterface {
  name = 'addPhoneNumberToUsersTable1617298219836'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "users" ADD "phone_number" character varying NOT NULL'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "phone_number"')
  }
}
