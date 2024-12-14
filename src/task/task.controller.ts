import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTask(@Query() query: any) {
    console.log(query);
    return this.taskService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: any) {
    return this.taskService.createTask(task);
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
