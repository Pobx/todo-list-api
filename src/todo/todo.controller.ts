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
import { ApiDataType } from 'src/models';
import { ITodo, TodoData } from './todo.interface';

@Controller('todo')
export class TodoController {
  apiDataType: ApiDataType;
  constructor(private readonly todoService: TodoData) {
    this.apiDataType = {
      message: null,
      status: '200',
      todos: [],
      todo: null,
    };
  }

  @Get('findAll')
  findAll() {
    this.apiDataType.todos = this.todoService.findAll();
    return this.apiDataType;
  }

  @Get('findOne')
  findOne(@Query() query: { id: number }) {
    const id = query.id;
    this.apiDataType.todo = this.todoService.findOne(id);
    return this.apiDataType;
  }

  @Post()
  @HttpCode(201)
  create(@Body() entity: ITodo) {
    this.apiDataType.todo = this.todoService.create(entity);
    return this.apiDataType;
  }

  @Put()
  @HttpCode(204)
  update(@Body() entity: ITodo) {
    this.todoService.update(entity);
  }

  @Delete()
  @HttpCode(204)
  delete(@Query() query: { id: number }) {
    const id = query.id;
    this.todoService.delete(id);
  }
}
