import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Newsletter } from 'src/Entities/newsletter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewslettersService {
    constructor(
        @InjectRepository(Newsletter)
        private newslettersRepository: Repository<Newsletter>,
      ) {}

      create(newsletter: Newsletter) {
        this.newslettersRepository.create(newsletter);
      }
    
      findAll(): Promise<Newsletter[]> {
        return this.newslettersRepository.find();
      }
    
      findOne(id: number): Promise<Newsletter> {
        return this.newslettersRepository.findOne(id);
      }

      update(id: number, newsletter: Newsletter) {
        this.newslettersRepository.update(id, newsletter);
      }
    
      async remove(id: number): Promise<void> {
        await this.newslettersRepository.delete(id);
      }
}
