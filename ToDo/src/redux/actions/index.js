export const ADD_TODO = "ADD_TODO";
export const GET_TODOS = "GET_TODOS";

export const getTodos = () => {
  return {
    type: "GET_TODOS",
    payload: ""
  };
};

export const addTodo = () => {
  return {
    type: "ADD_TODOS",
    payload: ""
  };
};
