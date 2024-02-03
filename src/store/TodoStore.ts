import { makeObservable, observable, action } from "mobx";

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export default class TodoStore {
  todos: Todo[] = [];

  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });

    this.todos = todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
