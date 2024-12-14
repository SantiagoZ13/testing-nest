import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: any[] = [];

  getAllUser() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    const userCreated = { ...user, id: this.users.length + 1 };
    this.users.push(userCreated);
    return userCreated;
  }
}
