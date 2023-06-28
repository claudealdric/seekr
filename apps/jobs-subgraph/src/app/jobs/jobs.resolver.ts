import {
	Args,
	Int,
	Mutation,
	Query,
	Resolver,
	ResolveReference,
} from "@nestjs/graphql";
import { Job } from "./job.object";
import { JobsService } from "./jobs.service";
import { CreateJobInput } from "./create-job.input";

@Resolver(() => Job)
export class JobsResolver {
	constructor(private readonly jobsService: JobsService) {}

	@Query(() => Job)
	getJobById(@Args("id", { type: () => Int }) id: number) {
		return this.jobsService.getJobById(id);
	}

	@Mutation(() => Job)
	createJob(@Args("jobData") jobData: CreateJobInput): Promise<Job> {
		return this.jobsService.createJob(jobData);
	}

	@ResolveReference()
	resolveReference(reference: {
		__typename: string;
		id: number;
	}): Promise<Job> {
		return this.jobsService.getJobById(reference.id);
	}
}
