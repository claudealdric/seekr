import { Query, Resolver } from '@nestjs/graphql';

import { User } from './user.object';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
