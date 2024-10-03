import { UsersServices } from './users.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';

import { CreateUserDto } from 'src/Dto/user.dto';
import { ZodValidationPipe } from 'src/validation/validation.pipe';
import { createUserSchema } from 'src/zodValidation/zodValidation';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersServices) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
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
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log();
    return this.usersServices.findOne(id);
  }
}
