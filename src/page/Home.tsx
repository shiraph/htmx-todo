import Layout from "../layout/Layout.tsx";

export default () => (
  <Layout>
    <div class="w-full max-w-screen-md m-auto">
      <form class="bg-white px-8 pt-6 pb-8 mb-4" hx-post="/todos"
            hx-target="#todos" hx-swap="innerHTML">
        <div class="mb-4">
          <div
            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
            <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              🌟
            </span>
            <input
              class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              name="todo"
              type="text"
              aria-label="Create Todo"
            />
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Create Todo
          </button>
        </div>
      </form>

      <section id="todos" hx-get="/todos" hx-trigger="load">

      </section>
    </div>
  </Layout>
)
