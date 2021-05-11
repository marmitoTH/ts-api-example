import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import DomainUser from '@domain/User'

@Entity('users')
class User extends DomainUser {
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
  readonly createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt: Date
}

export default User
