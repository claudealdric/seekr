import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Job } from "./job.object";
import { JobsService } from "./jobs.service";

@Resolver(() => Job)
export class JobsResolver {
	constructor(private readonly jobsService: JobsService) {}

	@Query(() => Job)
	getJobById(@Args("id", { type: () => Int }) id: number) {
		return this.jobsService.getJobById(id);
	}
}
