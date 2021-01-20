import { Controller, Post, Req, Res } from '@nestjs/common';
import { ResetPasswordService } from '../services/reset-password.service';

@Controller('reset')
export class ResetPasswordController {
  constructor(private readonly resetPasswordService: ResetPasswordService) {}

  @Post('/sendMail')
  async resetPassword(@Req() req, @Res() res) {
    return this.resetPasswordService.ResetPassword(req, res);
  }

  @Post('/newPassword/:resettoken')
  async newPassword(@Req() req, @Res() res) {
    return this.resetPasswordService.NewPassword(req, res);
  }
}
