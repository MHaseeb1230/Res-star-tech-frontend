import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todoSlice";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { RootState, AppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.todos);
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchTodos(token));
    }
  }, [dispatch, token]);

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList todos={items} />
    </div>
  );
};

export default Home;
