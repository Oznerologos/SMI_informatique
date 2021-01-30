import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsletter } from 'src/entities/newsletter.entity';
import { NewslettersService } from 'src/services/newsletters.service';
import { NewslettersController } from 'src/controllers/newsletters.controller';

@Module({  
    imports: [TypeOrmModule.forFeature([Newsletter])],
    exports: [TypeOrmModule, NewslettersModule],
    providers: [NewslettersService],
    controllers: [NewslettersController],})
export class NewslettersModule {}
