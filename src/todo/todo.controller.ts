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
  constructor(private readonly todoService: TodoData) {}

  @Get('findAll')
  findAll() {
    const apiDataType = {} as ApiDataType<ITodo[]>;
    apiDataType.message = [];
    apiDataType.message.push('Operation Success');
    apiDataType.entity = this.todoService.findAll();

    return apiDataType;
  }

  @Get('findOne')
  findOne(@Query() query: { id: number }) {
    const apiDataType = {} as ApiDataType<ITodo>;
    const id = query.id;
    apiDataType.message = [];
    apiDataType.message.push('Operation Success');
    apiDataType.entity = this.todoService.findOne(id);

    return apiDataType;
  }

  @Post()
  @HttpCode(201)
  create(@Body() entity: ITodo) {
    const apiDataType = {} as ApiDataType<ITodo>;
    apiDataType.message = [];
    apiDataType.message.push('Operation Success');
    apiDataType.entity = this.todoService.create(entity);

    return apiDataType;
  }

  @Put()
  @HttpCode(200)
  update(@Body() entity: ITodo) {
    const apiDataType = {} as ApiDataType<ITodo>;
    apiDataType.message = [];
    apiDataType.message.push('Operation Success');
    this.todoService.update(entity);

    return apiDataType;
  }

  @Delete()
  @HttpCode(200)
  delete(@Query() query: { id: number }) {
    const id = query.id;
    const apiDataType = {} as ApiDataType<ITodo>;

    this.todoService.delete(id);

    apiDataType.message.push('Operation Success');
    return apiDataType;
  }
}
