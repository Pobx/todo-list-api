import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Todo, TodoData } from './todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoData) {}

  @Get('findAll')
  findAll() {
    return this.todoService.findAll();
  }

  @Get('findOne')
  findOne(@Query() query: { id: number }) {
    const id = query.id;
    return this.todoService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() entity: Todo) {
    return this.todoService.create(entity);
  }

  @Put()
  @HttpCode(204)
  update(@Body() entity: Todo) {
    this.todoService.update(entity);
  }

  @Delete()
  @HttpCode(204)
  delete(@Query() query: { id: number }) {
    const id = query.id;
    this.todoService.delete(id);
  }
}
