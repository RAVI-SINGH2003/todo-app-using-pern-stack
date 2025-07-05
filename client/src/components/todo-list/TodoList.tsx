import "./TodoList.scss";
import type { ITodo } from "../../types";

interface ITodoListProps {
  todos: Array<ITodo>;
  handleTodoDelete: (id: number) => () => void;
}

const TodoList = (props: ITodoListProps) => {
  const { todos, handleTodoDelete } = props;
  return (
    <div className="todo-list-container">
      {todos.map(({ title, description, id }) => {
        return (
          <div className="todo-card" key={id}>
            <div className="todo-content">
              <p className="todo-title">{title}</p>
              <p className="todo-description">{description}</p>
            </div>
            <button className="delete-button" onClick={handleTodoDelete(id)}>
              ❌
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
