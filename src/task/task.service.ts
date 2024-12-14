import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  name: string;
  description: string;
  type: string;
}

@Injectable()
export class TaskService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException('Task not found');
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    const taskCreated = { ...task, id: this.tasks.length + 1 };
    this.tasks.push(taskCreated);
    return taskCreated;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'updated task';
  }

  deleteTask() {
    return 'deleted task';
  }
  updateTaskStatus() {
    return 'updated task status';
  }
}
