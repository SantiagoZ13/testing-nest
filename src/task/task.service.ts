import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks() {
    return [
      {
        name: 'Task 1',
        description: 'Task 1 description',
        category: 'Task 1 category',
      },
      {
        name: 'Task 2',
        description: 'Task 2 description',
        category: 'Task 2 category',
      },
    ];
  }
  createTask() {
    return 'created task';
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
