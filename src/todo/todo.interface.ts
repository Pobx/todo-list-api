export interface Todo {
  id?: number;
  label: string;
  completed: boolean;
}

export abstract class TodoData {
  abstract findAll(): Todo[];
  abstract findOne(id: number): Todo;
  abstract create(entity: Todo): Todo;
  abstract update(entity: Todo): void;
  abstract delete(id: number): void;
}
