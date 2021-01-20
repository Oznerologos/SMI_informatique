// import { Injectable } from '@nestjs/common';
// import { UsersService } from '../services/users.service';
// import { JwtService } from '@nestjs/jwt';

// const bcrypt = require('bcrypt');

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   async validateUser(username: string, pass: string): Promise<any> {
//     const user = await this.usersService.findOneUser(username);
//     if (user && (await bcrypt.compare(pass, user.password))) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

//   async login(user: any) {
//     const payload = { login: user.login, sub: user.id };
//     return {
//       user: user.login,
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
