import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return <div>{todo.content}</div>;
};

export default Todo;
