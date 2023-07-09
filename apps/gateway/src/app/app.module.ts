import { Module } from "@nestjs/common";
import { HealthController } from "shared";

@Module({
	imports: [],
	controllers: [HealthController],
	providers: [],
})
export class AppModule {}
