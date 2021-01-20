import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Newsletter } from './Entities/newsletter.entity';
import { User } from './Entities/user.entity';
import { Config } from './Entities/config.entity';
import { UsersModule } from './Modules/users.module';
import { ConfigsModule } from './Modules/configs.module';
import { NewslettersModule } from './Modules/newsletters.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'SMI',
    entities: [User,Config,Newsletter],
    synchronize: true,
    logger: 'simple-console',
  }), 
  UsersModule, ConfigsModule, NewslettersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {private connection: Connection}
