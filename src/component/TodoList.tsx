import type { Todo } from "../model/todo.ts";
import TodoItem from "./TodoItem.tsx";

export default ({ todos }: { todos: Todo[] }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </ul>
)
