import React from "react";
import { connect } from "react-redux";
// import {} from "../redux/actions";

import Todo from "./Todo";

const TodoList = () => {
  return (
    <div>
      HELLO
      <Todo />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
