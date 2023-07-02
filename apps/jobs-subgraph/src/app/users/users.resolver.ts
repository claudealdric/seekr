import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Job } from "../jobs/job.object";
import { JobsService } from "../jobs/jobs.service";
import { User } from "./user.object";

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly jobsService: JobsService) {}

	@ResolveField("jobs", () => [Job])
	getJobs(@Parent() user: User): Promise<Job[]> {
		return this.jobsService.getJobsByUserId(user.id);
	}
}
