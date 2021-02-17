import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ResetPasswordService } from '../services/reset-password.service';
import { ResetPasswordController } from '../controllers/reset-password.controller';
import { UsersService } from 'src/services/users.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/modules/users.module';
import { jwtConstants } from 'src/auth/constants';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'ssl0.ovh.net',
        port: 465,
        secure: true,
        auth: {
          user: 'noreply@smi83.com',
          pass: 'smi083470',
        },
      },
      preview: true,
    }),
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' },
    }),
  ],
  exports: [ResetPasswordService],
  providers: [ResetPasswordService, UsersService],
  controllers: [ResetPasswordController],
})
export class ResetPasswordModule {}
