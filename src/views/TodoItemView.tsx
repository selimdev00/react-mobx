import { observer } from "mobx-react-lite";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

export const TodoItemView = observer(({ todo }) => {
  return (
    <Card
      className={`flex ${todo.completed ? "line-through text-gray-500 opacity-75" : ""}`}
    >
      <div className={"py-5 pl-5"}>
        <Checkbox
          checked={todo.completed}
          onClick={() => todo.toggleTodo(todo.id)}
        />
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
  );
});
