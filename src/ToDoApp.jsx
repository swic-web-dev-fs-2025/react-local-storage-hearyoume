import { useLocalStorage } from "@uidotdev/usehooks";

export default function ToDoApp() {
  // Persist todos using the library hook
  const [todos, setTodos] = useLocalStorage("todos", []);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-3 p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
        To-Do List
      </h1>
      <div className="w-full max-w-lg flex gap-3">
        <input
          className="flex-1 px-4 py-2 border bg-white border-gray-200 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
          type="text"
          id="todo-input"
          placeholder="Add a To-Do..."
          aria-label="Add todo"
          onBlur={(e) => {
            const val = (e.target.value || "").trim();
            if (!val) return;
            setTodos((prev) => [...prev, { id: Date.now(), text: val }]);
            e.target.value = "";
          }}
        />
        <button className="mt-0 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Add
        </button>
      </div>

      <ul className="mt-6 space-y-2 max-w-lg mx-auto w-full">
        {todos.map(({ id, text }) => (
          <li
            key={id}
            className="bg-white border border-gray-100 rounded-md p-3 text-sm shadow-sm flex items-center justify-between"
          >
            <span className="text-gray-800">{text}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
