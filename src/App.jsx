import { useState } from "react";
import TodoList from "./assets/components/TodoList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
