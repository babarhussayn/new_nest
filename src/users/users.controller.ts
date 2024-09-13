import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post('/add')
  addUser(): string {
    return 'user add sucessfully';
  }
  @Get('/alluser')
  allUser(): string {
    return 'user all sucessfully';
  }
  @Delete('/delete')
  deleteUser(): string {
    return 'user delete sucessfully';
  }
}
