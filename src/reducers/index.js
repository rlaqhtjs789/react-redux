import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import todos from "./todos";
import posts from "./posts";

const rootReducer = combineReducers({
  counter,
  todos,
  posts
});

export default rootReducer;