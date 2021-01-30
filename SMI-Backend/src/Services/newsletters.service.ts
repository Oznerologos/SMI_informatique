import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Newsletter } from 'src/entities/newsletter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewslettersService {
    constructor(
        @InjectRepository(Newsletter)
        private newslettersRepository: Repository<Newsletter>,
      ) {}

      create(newsletter: Newsletter) {
        this.newslettersRepository.insert(newsletter);
      }
    
      findAll(): Promise<Newsletter[]> {
        return this.newslettersRepository.find();
      }

      async findOneByMail(mail: string): Promise<Newsletter> {
        return this.newslettersRepository.findOne({ where: { mail } });
      }
    

      update(id: number, newsletter: Newsletter) {
        this.newslettersRepository.update(id, newsletter);
      }
    
      async remove(id: number): Promise<void> {
        await this.newslettersRepository.delete(id);
      }
}
