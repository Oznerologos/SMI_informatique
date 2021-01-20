import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from 'src/entities/config.entity';
import { ConfigsController } from 'src/controllers/configs.controller';
import { ConfigsService } from 'src/services/configs.service';

@Module({  
    imports: [TypeOrmModule.forFeature([Config])],
    exports: [TypeOrmModule, ConfigsService],
    providers: [ConfigsService],
    controllers: [ConfigsController],})
export class ConfigsModule {}
