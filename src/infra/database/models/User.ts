import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column({ name: 'phone_number' })
  phoneNumber: string

  @Column()
  password: string

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt: string

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt: string
}

export default User
