import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum Status {
    Active,
    Inactive,
    Deleted
  }

@Entity()
export class Newsletter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mail: string;

    @Column()
    status: Status;
}