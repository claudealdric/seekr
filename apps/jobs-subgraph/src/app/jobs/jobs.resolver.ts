import {
	Args,
	Int,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver,
	ResolveReference,
} from "@nestjs/graphql";
import { User } from "../users/user.object";
import { CreateJobInput } from "./create-job.input";
import { Job as JobEntity } from "./job.entity";
import { Job } from "./job.object";
import { JobsService } from "./jobs.service";

@Resolver(() => Job)
export class JobsResolver {
	constructor(private readonly jobsService: JobsService) {}

	@Query(() => Job)
	getJobById(@Args("id", { type: () => Int }) id: number) {
		return this.jobsService.getJobById(id);
	}

	@Mutation(() => Job)
	createJob(@Args("jobData") jobData: CreateJobInput): Promise<JobEntity> {
		return this.jobsService.createJob(jobData);
	}

	@ResolveField("user", () => User)
	getUser(@Parent() job: Job) {
		return { __typename: "User", id: job.userId };
	}

	@ResolveReference()
	resolveReference(reference: {
		__typename: string;
		id: number;
	}): Promise<JobEntity> {
		return this.jobsService.getJobById(reference.id);
	}
}
