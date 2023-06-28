import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateJobInput {
	@Field()
	title: string;

	@Field({ nullable: true })
	description?: string;
}
