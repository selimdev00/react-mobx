import { observer } from "mobx-react-lite";
import { TodoList, TodoItem } from "@/store/TodoStore.ts";

import { TodoItemView } from "@/views/TodoItemView.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog.tsx";

const TodosStore = new TodoList([
  new TodoItem({
    id: 1,
    title: "Todo 1",
    description: "Description 1",
    completed: false,
  }),
  new TodoItem({
    id: 2,
    title: "Todo 1",
    description: "Description 1",
    completed: false,
  }),
  new TodoItem({
    id: 3,
    title: "Todo 1",
    description: "Description 1",
    completed: false,
  }),
]);

export const TodoListView = observer(() => {
  return (
    <div className={"p-4 flex flex-col gap-4"}>
      {TodosStore.activeTodos.length > 0 && (
        <>
          <div className={"flex justify-between"}>
            <h1 className="text-2xl font-bold px-2">Todos</h1>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"}>Add todo</Button>
              </DialogTrigger>

              <DialogContent className="bg-white">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {TodosStore.activeTodos.map((todo) => (
            <TodoItemView key={todo.id} todo={todo} />
          ))}
        </>
      )}

      {TodosStore.completedTodos.length > 0 && (
        <>
          <h1 className="text-2xl font-bold px-2">Completed todos</h1>

          {TodosStore.completedTodos.map((todo) => (
            <TodoItemView key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </div>
  );
});
