import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Job {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column({ nullable: true })
	description?: string;

	@Column()
	userId: number;
}
