import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailerService: MailerService,
  ) {}

  async sendMail(req, res) {
      var mailOptions = {
        to: 'noreply@smi83.com',
        from: req.body.mail,
        subject: 'Message de ' + req.body.lastname + " " + req.body.firstname,
        text:
         "Téléphone : " + req.body.phone + "\n \n" +
         "Message :" + req.body.message
      };
      
      this.mailerService.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email send' });
  }
}