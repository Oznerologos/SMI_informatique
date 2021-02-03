import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Config } from './config.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Config, config => config.user)
    configs: Config[];

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    mail: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column({nullable: true, default: null})
    resettoken: string;

    @Column({default: "user"})
    role: string;
}