import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import {
	ApolloFederationDriver,
	ApolloFederationDriverConfig,
} from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { Job } from "./jobs/job.entity";
import { JobsModule } from "./jobs/jobs.module";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloFederationDriverConfig>({
			driver: ApolloFederationDriver,
			autoSchemaFile: { federation: 2 },
			playground: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
			introspection: true,
		}),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.POSTGRES_HOST,
			port: 5432,
			username: process.env.POSTGRES_USERNAME,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DATABASE,
			entities: [Job],
			synchronize: true,
		}),
		JobsModule,
	],
	controllers: [AppController],
})
export class AppModule {}
