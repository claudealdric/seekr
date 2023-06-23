import { Injectable } from '@nestjs/common';
import { User } from './user.object';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      firstName: 'Claude',
      lastName: 'Aldric',
      email: 'claude.aldric@email.com',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
