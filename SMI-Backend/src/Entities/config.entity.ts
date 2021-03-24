import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Config {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.configs)
    user: User;

    @Column()
    name: string;

    @Column()
    budget: number;

    @Column()
    mounted: string;

    @Column()
    cpu: string;

    @Column()
    motherboard: string;

    @Column()
    ram: string;

    @Column()
    coolingsystem: string;

    @Column()
    gpu: string;

    @Column()
    ssd1: string;

    @Column()
    ssd2: string;

    @Column()
    hdd1: string;

    @Column()
    hdd2: string;

    @Column()
    cdplayerburner: string;

    @Column()
    cardsplayer: string;

    @Column()
    wifiboard: string;

    @Column()
    case: string;

    @Column()
    display1: string;

    @Column()
    display2: string;

    @Column()
    powerunit: string;

    @Column()
    keyboard: string;

    @Column()
    mouse: string;

    @Column()
    os: string;

    @Column()
    antivirus: string;

    @Column()
    microsoftoffice: string;

    @Column()
    soundboard: string;

    @Column()
    inverter: string;
    
    @Column()
    validated: boolean;

    @Column('text')
    message: string;
}