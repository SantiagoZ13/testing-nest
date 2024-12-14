import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [UserModule, TaskModule, ProjectModule, AuthModule],
  controllers: [HelloController],
})
export class AppModule {}
