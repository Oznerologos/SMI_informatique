import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ContactService } from 'src/services/contact.service';
import { ContactController } from 'src/controllers/contact.controller';

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
  ],
  exports: [ContactService],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
