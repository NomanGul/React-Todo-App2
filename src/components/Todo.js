import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  // console.log(JSON.parse(todos))
  const getTodos =
    todos.length > 0 ? (
      todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span>{todo.content}</span>
            <span
              className="secondary-content"
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(todo.id)}
            >
              <i className="material-icons red-text">delete</i>
            </span>
          </div>
        );
      })
    ) : (
      <div className="collection-item center">
        You've no Todo's left!
      </div>
    );
  return <div className="collection">{getTodos}</div>;
};

export default Todo;
