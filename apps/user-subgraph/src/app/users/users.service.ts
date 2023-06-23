import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.object';
import { User as UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
