import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {
  console.log(todo);
  return (
    <div
      style={{
        padding: 25,
        borderBottom: "1px solid black",
        textDecoration: todo.completed && "line-through"
      }}
      onClick={() => toggleTodo(todo)}
    >
      {todo.content}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(Todo);
