import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTask() {
    return {
      name: 'Task 1',
      description: 'Task 1 description',
      category: 'Task 1 category',
    };
  }
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
}
