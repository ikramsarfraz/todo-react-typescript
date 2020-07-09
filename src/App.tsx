import React, { useState } from "react";
// Styles
import "./App.css";
// Components
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className="todo-container">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
