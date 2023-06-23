import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.object';
import { User as UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  createUser(userData: CreateUserInput): Promise<User> {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
