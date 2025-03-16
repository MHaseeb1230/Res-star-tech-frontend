import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { AppDispatch } from "../redux/store";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ title, completed: false, userId: "userId" }));
    setTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" placeholder="Enter todo..." value={title} onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
