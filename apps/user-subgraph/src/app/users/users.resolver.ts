import { Query, Resolver } from '@nestjs/graphql';

import { User } from './user.object';

@Resolver(() => User)
export class UsersResolver {
  private readonly users: User[] = [
    {
      id: 1,
      firstName: 'Claude',
      lastName: 'Aldric',
      email: 'claude.aldric@email.com',
    },
  ];

  @Query(() => [User])
  getUsers(): User[] {
    return this.users;
  }
}
