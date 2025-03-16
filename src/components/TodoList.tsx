import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";
import { Todo } from "../types";
import { AppDispatch } from "../redux/store";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => dispatch(toggleTodo(todo._id))}>{todo.title}</span>
          <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
