import { Injectable } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { JwtService } from '@nestjs/jwt';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(mail: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByMail(mail);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { mail: user.mail, sub: user.id };
    return {
      user: user.mail,
      access_token: this.jwtService.sign(payload),
    };
  }
}
