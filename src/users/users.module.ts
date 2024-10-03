import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersServices } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersServices],
  exports: [UsersServices],
})
export class UsersModule {
  constructor(private usersService: UsersServices) {
    console.log('UsersModule');
  }
}
