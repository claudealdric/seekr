import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Job as JobEntity } from "./job.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "./job.object";

@Injectable()
export class JobsService {
	constructor(
		@InjectRepository(JobEntity)
		private readonly jobsRepository: Repository<JobEntity>
	) {}

	getJobById(id: number): Promise<Job> {
		return this.jobsRepository.findOneBy({ id });
	}
}
