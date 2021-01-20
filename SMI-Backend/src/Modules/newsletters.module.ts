import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsletter } from 'src/Entities/newsletter.entity';
import { NewslettersService } from 'src/Services/newsletters.service';
import { NewslettersController } from 'src/Controllers/newsletters.controller';

@Module({  
    imports: [TypeOrmModule.forFeature([Newsletter])],
    providers: [NewslettersService],
    controllers: [NewslettersController],})
export class NewslettersModule {}
