import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { UsersService } from 'src/services/users.service';

@Injectable()
export class ResetPasswordService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async ResetPassword(req, res) {
    if (!req.body.mail)
      return res.status(500).json({ message: 'Email is required' });
    const user = await this.usersService.findOneByMail(req.body.mail);
    const payload = { mail: user.mail, sub: user.id };
    var resettoken = this.jwtService.sign(payload);
    await this.usersService.updateToken(user.id, resettoken);
    if (!user) return res.status(409).json({ message: 'Email does not exist' });

    var mailOptions = {
      to: user.mail,
      from: 'developpement1996@gmail.com',
      subject: 'Reinitialisation de votre mot de passe',
      text:
        "Vous recevez ce message parce que vous (ou quelqu'un d'autre) avez demandé la réinitialisation du mot de passe de votre compte.\n\n" +
        'Veuillez cliquer sur le lien suivant, ou le coller dans votre navigateur pour terminer la procédure :\n\n' +
        'http://localhost:4200/responseResetPassword?resettoken=' +
        resettoken +
        '\n\n' +
        "Si vous n'en avez pas fait la demande, veuillez ignorer ce courriel et votre mot de passe restera inchangé.\n",
    };
    this.mailerService.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email send' });
  }

  async NewPassword(req, res) {
    if (!req.params)
      return res.status(500).json({ message: 'Params is not defined' });

    if (!req.params.resettoken)
      return res.status(407).json({ message: 'Token is required' });

    if (req.body && req.body.password) {
      const user = await this.usersService.findOneGeneric({
        key: 'resettoken',
        value: req.params.resettoken,
      });
      if (!user)
        return res.status(406).json({ message: 'User does not exist' });

      if (req.params.resettoken != user.resettoken)
        return res.status(409).json({ message: 'Token is not available' });

      this.usersService.updatePassword(user.id, req.body.password);
      this.usersService.updateToken(user.id, '');

      return res.status(200).json({ message: 'Password changed successfully' });
    } else {
      return res.status(505).json({ message: 'Login or Password is missing' });
    }
  }
}
