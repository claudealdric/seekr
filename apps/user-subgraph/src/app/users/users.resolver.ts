import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from './user.object';
import { UsersService } from './users.service';
import { CreateUserInput } from './create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { nullable: true })
  getUserById(
    @Args('id', { type: () => Int }) id: number
  ): Promise<User | null> {
    return this.usersService.getUserById(id);
  }

  @Query(() => [User])
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Mutation(() => User)
  createUser(@Args('userData') userData: CreateUserInput): Promise<User> {
    return this.usersService.createUser(userData);
  }
}
