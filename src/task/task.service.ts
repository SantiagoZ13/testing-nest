import { Injectable, NotFoundException } from '@nestjs/common';

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

  createTask(task: any) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask() {
    return 'updated task';
  }

  deleteTask() {
    return 'deleted task';
  }
  updateTaskStatus() {
    return 'updated task status';
  }
}
