import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoData } from './todo.interface';

@Injectable()
export class TodoService extends TodoData {
  private storage: Todo[] = [];
  constructor() {
    super();
  }

  findAll(): Todo[] {
    return this.storage;
  }

  findOne(id: number): Todo {
    if (!id) {
      return null;
    }

    return this.storage.find((item) => item.id === Number(id));
  }

  create(entity: Todo): Todo {
    const ids = this.storage.map((item) => item.id);
    const arrayIds = ids.length <= 0 ? [0] : ids;
    const currentMaxId = Math.max(...arrayIds);
    entity.id = currentMaxId + 1;

    this.storage.push(entity);

    return entity;
  }

  update(entity: Todo): void {
    const index = this.storage.findIndex((item) => item.id === entity.id);
    if (index === -1) {
      throw new NotFoundException(`Your id(${entity.id}) doesn't exist`);
    }

    this.storage[index].label = entity.label;
    this.storage[index].completed = entity.completed;
  }

  delete(id: number): void {
    const index = this.storage.findIndex((item) => item.id === Number(id));
    if (index === -1) {
      throw new NotFoundException(`Your id(${id}) doesn't exist`);
    }

    this.storage.splice(index, 1);
  }
}
