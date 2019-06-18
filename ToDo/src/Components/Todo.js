import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <div style={{ padding: 25, borderBottom: "1px solid black" }}>
      {todo.content}
    </div>
  );
};

export default Todo;
