import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
	@Field(() => Int)
	id: number;

	@Field()
	firstName: string;

	@Field({ nullable: true })
	lastName?: string;

	@Field()
	email: string;
}
