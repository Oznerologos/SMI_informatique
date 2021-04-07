import { Controller, Post, Req, Res } from '@nestjs/common';
import { ContactService } from '../services/contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('/sendMail')
  async sendMail(@Req() req, @Res() res) {
    return this.contactService.sendMail(req, res);
  }
}