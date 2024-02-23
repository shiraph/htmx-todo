import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import { staticPlugin } from '@elysiajs/static'
import Home from "./src/page/Home.tsx";
import type { Todo } from "./src/model/todo.ts";

const app = new Elysia()
app.use(html())
app.use(staticPlugin())

let todos: Todo[] = [
  {
    id: 1,
    name: "default todo 1",
  }
];

app.get("/", () => <Home />)
app.get("/todos", (request: Request) => {
  return todos
})
app.post("/todos", (request: Request) => {
  if (!request.body) {
    return { error: "No body" }
  }
  if (!("todo" in request.body)) {
    return { error: "No todo" }
  }
  const todo = {
    id: todos.length + 1,
    name: request.body.todo as string,
  }
  todos.push(todo)
  return todos
})

app.listen(8080, () => {
  console.log(`[Elysia] Listening on port 8080`)
})
