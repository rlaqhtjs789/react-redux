const posts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default posts;