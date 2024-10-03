import { UsersServices } from './users.service';
import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';

import { CreateUserDto } from 'src/Dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersServices) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.usersServices.create(createUserDto);
  }

  @Get('/alluser')
  allUser(): string {
    return 'user all sucessfully';
  }
  @Delete('/delete')
  deleteUser(): string {
    return 'user delete sucessfully';
  }
  @Get('/findUserById/:userId')
  findOne(@Param() params): string {
    console.log(params.userId);
    return `this is user ${params.userId}`;
  }
}
