import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/Entities/user.entity';
import { UsersService } from 'src/Services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post('')
  async create(@Body() user: User) {
    var existingUser = await this.usersService.findOneByMail(user.mail);
    if (existingUser != undefined) {
      return 'Cet utilisateur existe déjà';
    } else {
    this.usersService.create(user);
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

  @Get('getOneMail/:mail')
  getOneUser(@Param() params): Promise<User> {
    return this.usersService.findOneByMail(params.mail);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param() params): Promise<void> {
    return this.usersService.remove(params.id);
  }
}