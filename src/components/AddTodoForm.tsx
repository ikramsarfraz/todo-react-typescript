import React, { useState } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter Todo..."
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        +
      </button>
    </form>
  );
};

export default AddTodoForm;
