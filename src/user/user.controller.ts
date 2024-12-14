import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get('/')
  getAllUser() {
    return this.UserService.getAllUser();
  }

  @Post('/')
  createTask() {
    return 'created task';
  }

  @Put('/')
  updateTask() {
    return 'updated task';
  }

  @Delete('/')
  deleteTask() {
    return 'deleted task';
  }

  @Patch('/')
  updateTaskStatus() {
    return 'updated task status';
  }
}
