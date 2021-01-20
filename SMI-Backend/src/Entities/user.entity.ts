import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Config } from './config.entity';

enum Role {
    User,
    Admin
  }

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Config, config => config.user)
    configs: Config[];

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    mail: string;

    @Column()
    phone: number;

    @Column()
    password: string;

    @Column({nullable: true, default: null})
    resettoken: string;

    @Column()
    role: Role;
}