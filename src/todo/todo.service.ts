import { Injectable, NotFoundException } from '@nestjs/common';
import { ITodo, TodoData } from './todo.interface';

@Injectable()
export class TodoService extends TodoData {
  private storage: ITodo[] = [];
  constructor() {
    super();
  }

  findAll(): ITodo[] {
    return this.storage;
  }

  findOne(id: number): ITodo {
    if (!id) {
      return null;
    }

    return this.storage.find((item) => item.id === Number(id));
  }

  create(entity: ITodo): ITodo {
    const ids = this.storage.map((item) => item.id);
    const arrayIds = ids.length <= 0 ? [0] : ids;
    const currentMaxId = Math.max(...arrayIds);
    entity.id = currentMaxId + 1;

    this.storage.push(entity);

    return entity;
  }

  update(entity: ITodo): void {
    const index = this.storage.findIndex((item) => item.id === entity.id);
    if (index === -1) {
      throw new NotFoundException(`Your id(${entity.id}) doesn't exist`);
    }

    this.storage[index].name = entity.name;
    this.storage[index].description = entity.description;
    this.storage[index].status = entity.status;
    this.storage[index].updateAt = entity.updateAt;
  }

  delete(id: number): void {
    const index = this.storage.findIndex((item) => item.id === Number(id));
    if (index === -1) {
      throw new NotFoundException(`Your id(${id}) doesn't exist`);
    }

    this.storage.splice(index, 1);
  }
}
