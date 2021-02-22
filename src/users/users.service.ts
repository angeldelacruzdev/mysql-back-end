import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User as U } from './user.schema';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(U)
    private userRepository: Repository<U>,
  ) {}

  async create(user: User): Promise<User> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(user.password, saltOrRounds);
    user.password = hash;
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async update(id: number, user: any): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async delete(id: number, active: boolean): Promise<void> {
    const data = await this.userRepository.query(
      `UPDATE users SET isActive=? WHERE id=?`,
      [active, id],
    );
  }
}
