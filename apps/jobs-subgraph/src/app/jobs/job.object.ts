import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../users/user.object";

@ObjectType()
@Directive('@key(fields: "id")')
export class Job {
	@Field(() => Int)
	id: number;

	@Field()
	title: string;

	@Field({ nullable: true })
	description?: string;

	@Field(() => Int)
	userId: number;

	@Field(() => User)
	user: User;
}
