import { ADD_TODO, GET_TODOS } from "../actions";

const initialState = {
  todos: [{ id: 0, content: "This is a test todo" }]
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length, content: action.payload }
        ]
      };
    default:
      return state;
  }
};
