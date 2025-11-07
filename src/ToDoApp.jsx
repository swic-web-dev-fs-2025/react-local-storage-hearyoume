import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";

import "./App.css";

export default function ToDoApp() {
  // Persist both todos and the input value using the library hook
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [text, setText] = useLocalStorage("todo-input", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = (text || "").trim();
    if (!trimmed) return;
    const newToDo = { id: Date.now(), text: trimmed };
    setTodos((prev) => [...prev, newToDo]);
    setText("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
          aria-label="New todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
  <li key={todo.id}>
    {todo.text}
  </li>
))}
      </ul>
    </div>
  );
}

