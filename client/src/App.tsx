import { Form, TodoList } from "./components";
import "./App.scss";
import { useEffect, useState } from "react";
import type { ITodo } from "./types";

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/todo");
      const { data } = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoDelete = (id: number) => async () => {
    try {
      await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE",
      });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  return (
    <div className="container">
      <Form fetchTodos={fetchTodos} />
      <TodoList todos={todos} handleTodoDelete={handleTodoDelete} />
    </div>
  );
};

export default App;
