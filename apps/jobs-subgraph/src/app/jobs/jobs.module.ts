import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Job } from "./job.entity";
import { JobsResolver } from "./jobs.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([Job])],
	providers: [JobsResolver],
})
export class JobsModule {}
