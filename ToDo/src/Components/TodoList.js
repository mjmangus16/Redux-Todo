import React from "react";
import { connect } from "react-redux";
// import {} from "../redux/actions";

import Todo from "./Todo";

const TodoList = ({ todos }) => {
  let content;

  if (todos.length > 0) {
    content = todos.map(todo => <Todo todo={todo} key={`todo-${todo.id}`} />);
  } else {
    content = "LOADING";
  }
  return <div>{content}</div>;
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
