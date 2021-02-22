import { Entity, EntitySchema } from 'typeorm';

import { Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  USER_ADMIN = 'user_admin',
  SUPER_ADMIN = 'super_admin',
  USER = 'patient',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'set', enum: UserRole, default: UserRole.USER })
  role: UserRole[];

  @Column({ default: true })
  isActive: boolean;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}

export const UserSchema = new EntitySchema<User>({
  name: 'users',
  target: User,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: 'increment',
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      nullable: false,
    },
    password: {
      type: String,
      nullable: false,
    },
    role: {
      type: String,
      default: 'patient',
      nullable: false,
    },
    isActive: {
      type: Boolean,
      default: true,
      nullable: false,
    },
    created_at: {
      name: 'created_at',
      type: 'timestamp',
      updateDate: false,
    },
    updated_at: {
      name: 'updated_at',
      type: 'timestamp',
      updateDate: true,
    },
  },

  indices: [
    {
      name: 'IDX_USERS',
      unique: true,
      columns: ['email', 'name'],
    },
  ],
});
