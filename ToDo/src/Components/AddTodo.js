import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends Component {
  state = {
    newTodo: ""
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.newTodo);
    return (
      <div
        style={{
          margin: "25px auto",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <input
          type="text"
          placeholder="Add Todo"
          style={{ width: 500, fontSize: "2rem" }}
          onChange={e => this.inputHandler(e)}
          name="newTodo"
        />
        <button
          style={{
            width: 300,
            height: 35,
            backgroundColor: "lightBlue",
            margin: 25,
            fontSize: "1rem"
          }}
          onClick={() => this.props.addTodo(this.state.newTodo)}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(AddTodo);
