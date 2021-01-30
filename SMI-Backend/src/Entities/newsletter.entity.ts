import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Newsletter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mail: string;

    @Column({default: "active"})
    status: string;
}