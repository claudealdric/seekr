import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Job } from "./job.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Job])],
	providers: [],
})
export class JobsModule {}
