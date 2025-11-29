const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    case "REMOVE_TODO":
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
};

export default todos;
