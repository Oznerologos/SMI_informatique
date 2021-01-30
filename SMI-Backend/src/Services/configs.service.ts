import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Config } from 'src/entities/config.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConfigsService {
    constructor(
        @InjectRepository(Config)
        private configsRepository: Repository<Config>,
      ) {}

      create(config: Config) {
        this.configsRepository.insert(config);
      }
    
      findAll(): Promise<Config[]> {
        return this.configsRepository.find();
      }
    
      findOne(id: number): Promise<Config> {
        return this.configsRepository.findOne(id);
      }
      
      update(id: number, config: Config) {
        this.configsRepository.update(id, config);
      }    

      async remove(id: number): Promise<void> {
        await this.configsRepository.delete(id);
      }
}
