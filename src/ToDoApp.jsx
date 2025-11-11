import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useState } from "react";

import "./app.css";

export default function ToDoApp() {
  // Persist todos using the library hook; use transient state for the input
  const [todos, setTodos] = useLocalStorage("todos", []);
  // eslint-disable-next-line use-encapsulation/prefer-custom-hooks
  const [text, setText] = useState("");

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
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
