import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateJobInput } from "./create-job.input";
import { Job as JobEntity } from "./job.entity";

@Injectable()
export class JobsService {
	constructor(
		@InjectRepository(JobEntity)
		private readonly jobsRepository: Repository<JobEntity>
	) {}

	createJob(jobData: CreateJobInput): Promise<JobEntity> {
		const job = this.jobsRepository.create(jobData);
		return this.jobsRepository.save(job);
	}

	getJobById(id: number): Promise<JobEntity> {
		return this.jobsRepository.findOneBy({ id });
	}

	getJobsByUserId(userId: number): Promise<JobEntity[]> {
		return this.jobsRepository.findBy({ userId });
	}
}
