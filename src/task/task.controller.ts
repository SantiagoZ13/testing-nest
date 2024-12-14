import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTask() {
    return this.taskService.getTasks();
  }
  @Post()
  createTask() {
    return this.taskService.createTask();
  }

  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }
}
