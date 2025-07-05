import React, { useState } from "react";
import "./Form.scss";
import type { ITodo } from "../../types";

const Form = ({ fetchTodos }) => {
  const [todo, setTodo] = useState<Omit<ITodo, "id">>({
    title: "",
    description: "",
  });

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/todo", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      await fetchTodos()
    } catch (error) {
      console.error("Error creating todo", error);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Enter the Todo"
        className="todo-title-input"
        value={todo.title}
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <textarea
        rows={10}
        placeholder="Enter the description for the TODO"
        className="todo-description"
        value={todo.description}
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <button className="todo-add-button" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
