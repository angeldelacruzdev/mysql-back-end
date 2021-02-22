import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User as U } from './user.schema';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(U)
    private userRepository: Repository<U>,
  ) {}

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async update(id: number, user: any): Promise<void> {
    this.userRepository.update(id, user);
  }
}
