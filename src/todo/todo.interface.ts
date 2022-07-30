export interface ITodo {
  id?: number;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updateAt?: string;
}

export abstract class TodoData {
  abstract findAll(): ITodo[];
  abstract findOne(id: number): ITodo;
  abstract create(entity: ITodo): ITodo;
  abstract update(entity: ITodo): void;
  abstract delete(id: number): void;
}
