import type { Todo } from "../model/todo.ts";

export default ({ todo }: { todo: Todo }) => (
  <div class="flex items-center justify-between px-4 py-2 border-b border-gray-200">
    <span class="text-gray-900 text-sm">{todo.name}</span>
    <button
      class="text-red-600 text-sm"
      type="button"
      hx-delete={`/delete/${todo.id}`}
      hx-swap="innerHTML"
      hx-target="#todos"
    >
      Delete
    </button>
  </div>
)
