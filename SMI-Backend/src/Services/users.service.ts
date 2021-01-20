import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../Entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: User) {
    const hashed = await bcrypt.hash(user.password, 10);
    this.usersRepository.insert({ ...user, password: hashed });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findOneByMail(mail: string): Promise<User> {
    return this.usersRepository.findOne({ where: { mail } });
  }

  async update(id: number, user: User) {
    await this.usersRepository.update(id, user);
  }

  async updateToken(id: number, resettoken: string) {
    return this.usersRepository.update(id, { resettoken });
  }

  async updatePassword(id: number, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    return this.usersRepository.update(id, { password: hashed });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}