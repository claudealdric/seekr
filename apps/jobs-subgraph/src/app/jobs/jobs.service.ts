import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Job as JobEntity } from "./job.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "./job.object";
import { CreateJobInput } from "./create-job.input";

@Injectable()
export class JobsService {
	constructor(
		@InjectRepository(JobEntity)
		private readonly jobsRepository: Repository<JobEntity>
	) {}

	createJob(jobData: CreateJobInput): Promise<Job> {
		const job = this.jobsRepository.create(jobData);
		return this.jobsRepository.save(job);
	}

	getJobById(id: number): Promise<Job> {
		return this.jobsRepository.findOneBy({ id });
	}

	getJobsByUserId(userId: number): Promise<Job[]> {
		return this.jobsRepository.findBy({ userId });
	}
}
