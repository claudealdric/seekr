import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import {
	ApolloFederationDriver,
	ApolloFederationDriverConfig,
} from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HealthController } from "shared";
import { User } from "./users/user.entity";
import { UsersModule } from "./users/users.module";

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
			port: process.env.POSTGRES_PORT
				? Number(process.env.POSTGRES_PORT)
				: 5432,
			username: process.env.POSTGRES_USERNAME,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DATABASE,
			entities: [User],
			synchronize: true,
		}),
		UsersModule,
	],
	controllers: [HealthController],
})
export class AppModule {}
