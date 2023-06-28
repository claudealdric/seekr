import {
	Args,
	Int,
	Mutation,
	Query,
	Resolver,
	ResolveReference,
} from "@nestjs/graphql";
import { CreateUserInput } from "./create-user.input";
import { User } from "./user.object";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { nullable: true })
	getUserById(
		@Args("id", { type: () => Int }) id: number
	): Promise<User | null> {
		return this.usersService.getUserById(id);
	}

	@Query(() => [User])
	getUsers(): Promise<User[]> {
		return this.usersService.getUsers();
	}

	@Mutation(() => User)
	createUser(@Args("userData") userData: CreateUserInput): Promise<User> {
		return this.usersService.createUser(userData);
	}

	@ResolveReference()
	resolveReference(reference: {
		__typename: string;
		id: number;
	}): Promise<User> {
		return this.usersService.getUserById(reference.id);
	}
}
