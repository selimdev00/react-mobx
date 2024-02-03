import { makeObservable, observable, action, computed } from "mobx";

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export class TodoList {
  todos: Todo[] = [];

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get activeTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      toggleTodo: action,
      addTodo: action,
      completedTodos: computed,
      activeTodos: computed,
    });

    this.todos = todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }
}

export class TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.title = todo.title;
    this.description = todo.description;
    this.completed = todo.completed;

    makeObservable(this, {
      toggleTodo: action,
      completed: observable,
    });
  }

  toggleTodo() {
    this.completed = !this.completed;
  }
}
