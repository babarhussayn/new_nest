import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/users.interface';

@Injectable()
export class UsersServices {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }
  findAll(): User[] {
    return this.users;
  }
  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
