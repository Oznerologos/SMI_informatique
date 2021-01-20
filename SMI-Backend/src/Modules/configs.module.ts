import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from 'src/Entities/config.entity';
import { ConfigsController } from 'src/Controllers/configs.controller';
import { ConfigsService } from 'src/Services/configs.service';

@Module({  
    imports: [TypeOrmModule.forFeature([Config])],
    providers: [ConfigsService],
    controllers: [ConfigsController],})
export class ConfigsModule {}
