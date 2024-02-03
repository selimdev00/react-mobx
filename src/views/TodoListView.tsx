import { observer } from "mobx-react-lite";
import { useState } from "react";
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
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

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
  const [newTodo, setNewTodo] = useState({
    id: Math.random(),
    title: "",
    description: "",
    completed: false,
  });

  const [addTodoDialogIsOpen, setAddTodoDialogIsOpen] = useState(false);

  return (
    <div className={"p-4 flex flex-col gap-4"}>
      {TodosStore.activeTodos.length > 0 && (
        <>
          <div className={"flex justify-between"}>
            <h1 className="text-2xl font-bold px-2">Todos</h1>

            <Dialog
              open={addTodoDialogIsOpen}
              onOpenChange={setAddTodoDialogIsOpen}
            >
              <DialogTrigger>
                <Button variant={"outline"}>Add todo</Button>
              </DialogTrigger>

              <DialogContent className="bg-white">
                <DialogHeader>
                  <DialogTitle>Add todo</DialogTitle>
                  <DialogDescription>
                    Fill information about todo. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>

                <div className={"flex flex-col gap-2"}>
                  <Label htmlFor={"name"}>Todo name</Label>
                  <Input
                    id={"name"}
                    placeholder={"Todo name"}
                    value={newTodo.title}
                    onInput={(e) =>
                      setNewTodo((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                </div>

                <div className={"flex flex-col gap-2"}>
                  <Label htmlFor={"description"}>Todo description</Label>
                  <Textarea
                    id={"description"}
                    placeholder={"Todo description"}
                    value={newTodo.description}
                    onInput={(e) =>
                      setNewTodo((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>

                <Button
                  variant={"default"}
                  onClick={() => {
                    TodosStore.addTodo(newTodo);
                    setAddTodoDialogIsOpen(false);
                    setNewTodo({
                      id: Math.random(),
                      title: "",
                      description: "",
                      completed: false,
                    });
                  }}
                >
                  Save
                </Button>
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
