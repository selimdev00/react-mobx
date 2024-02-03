import { observer } from "mobx-react-lite";
import TodoStore from "@/store/TodoStore.ts";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";

const todoList = new TodoStore([
  { id: 1, title: "Learn MobX", description: "Learn MobX 1", completed: false },
  {
    id: 2,
    title: "Learn MobX 2",
    description: "Learn MobX 2",
    completed: true,
  },
  {
    id: 3,
    title: "Learn MobX 3",
    description: "Learn MobX 3",
    completed: false,
  },
]);

const TodoList = observer(() => {
  return (
    <div className={"p-4 flex flex-col gap-4"}>
      <h1 className="text-2xl font-bold px-2">Todo List</h1>

      {todoList.todos.map((todo) => (
        <Card key={todo.id} className={"flex"}>
          <div className={"py-5 pl-5"}>
            <Checkbox checked={todo.completed} />
          </div>

          <div>
            <CardHeader>
              <CardTitle>{todo.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription>{todo.description}</CardDescription>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
});

export default TodoList;
