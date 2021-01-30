import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Newsletter } from './entities/newsletter.entity';
import { User } from './entities/user.entity';
import { Config } from './entities/config.entity';
import { UsersModule } from './modules/users.module';
import { ConfigsModule } from './modules/configs.module';
import { NewslettersModule } from './modules/newsletters.module';
import { ResetPasswordModule } from './modules/reset-password.module';
import { AuthModule } from './auth/auth.module';

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
  AuthModule, UsersModule, ConfigsModule, NewslettersModule, ResetPasswordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {private connection: Connection}
