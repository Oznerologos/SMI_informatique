import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService,) {}
  
  @Post('')
  async create(@Body() user: User) {
    var existingUser = await this.usersService.findOneByMail(user.mail);
    if (existingUser != undefined) {
      return 'Cet email existe déjà';
    } else {
      user = await this.usersService.create(user);
      const payload = { mail: user.mail, sub: user.id };
      return {
        user: user.mail,
        access_token: this.jwtService.sign(payload),
      }
    }
  }

  @Post('/admin')
  async createAdmin(@Body() user: User) {
    var existingUser = await this.usersService.findOneByMail(user.mail);
    if (existingUser != undefined) {
      return 'Cet email existe déjà';
    } else {
      user = await this.usersService.create(user);
      return {
        user: user
      }
    }
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/getOneId/:id')
  findOne(@Param() params): Promise<User> {
    return this.usersService.findOneById(params.id);
  }

  @Get('/getOneMail/:mail')
  getOneUser(@Param() params): Promise<User> {
    return this.usersService.findOneByMail(params.mail);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User) {
    this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param() params): Promise<void> {
    return this.usersService.remove(params.id);
  }
}