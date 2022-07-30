import { ITodo } from 'src/todo/todo.interface';

export type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
