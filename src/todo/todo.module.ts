import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoData } from './todo.interface';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [{ provide: TodoData, useClass: TodoService }],
})
export class TodoModule {}
