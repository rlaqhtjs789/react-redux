import axios from "axios";

export const fetchPosts = () => {
  return async function fetchPostsThunk(dispatch, getState) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_POST", payload: response.data });
  }
}