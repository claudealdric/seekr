import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { Job } from "../jobs/job.object";

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
	@Field(() => Int)
	id: number;

	@Field(() => [Job])
	jobs?: Job[];
}
