import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Job } from "./job.object";

@Resolver(() => Job)
export class JobsResolver {
	@Query(() => Job)
	getJobById(@Args("id", { type: () => Int }) id: number) {
		return { id: 1, title: "Test Title" };
	}
}
