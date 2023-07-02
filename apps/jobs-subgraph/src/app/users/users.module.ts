import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import { JobsModule } from "../jobs/jobs.module";

@Module({
	imports: [JobsModule],
	providers: [UsersResolver, UsersService],
})
export class UsersModule {}
