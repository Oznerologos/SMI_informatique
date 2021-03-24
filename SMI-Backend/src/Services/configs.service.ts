import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Config } from 'src/entities/config.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConfigsService {
    constructor(
        @InjectRepository(Config)
        private configsRepository: Repository<Config>
      ) {}

      create(config: Config) {
        this.configsRepository.insert(config);
      }
    
      async findAll(): Promise<Config[]> {
        return this.configsRepository.find({ relations: ["user"] });
      }

      findAllWhereUser(id: number): Promise<Config[]> {
        return this.configsRepository.find({ where: {user: {id}}, relations: ["user"]});
      }

      findAllWhereUserAdmin(id: number): Promise<Config[]> {
        return this.configsRepository.find({ where: {user: {id}, validated: 1}, relations: ["user"]});
      }
    
      findOne(id: number): Promise<Config> {
        return this.configsRepository.findOne(id, { relations: ["user"] });
      }
      
      update(id: number, config: Config) {
        this.configsRepository.update(id, config);
      }    

      async remove(id: number): Promise<void> {
        await this.configsRepository.delete(id);
      }
}
