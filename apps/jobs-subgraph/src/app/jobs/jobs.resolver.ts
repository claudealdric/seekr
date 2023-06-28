import { Resolver } from "@nestjs/graphql";
import { Job } from "./job.object";

@Resolver(() => Job)
export class JobsResolver {}
