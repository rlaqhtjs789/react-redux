import { useEffect, useState, useRef } from "react";
import "./App.css";
import ChildComponentA from "./ChildComponentA.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const effectRan = useRef(false);
  const posts = useSelector((state) => state.posts);
  async function fetchPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: "FETCH_POST", payload: response.data });
  }
  useEffect(() => {
    // StrictMode는 개발 환경에서 컴포넌트를 두 번 렌더링하여 잠재적 문제를 찾습니다.
    // 이 useRef 로직은 API가 한 번만 호출되도록 보장합니다.
    if (effectRan.current === false) {
      fetchPosts();

      // cleanup 함수: 컴포넌트가 언마운트될 때 실행됩니다.
      return () => (effectRan.current = true);
    }
  });

  const [todoValue, setTodoValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  const counter = useSelector((state) => state.counter);
  const handelIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handelDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };


  return (
    <div className="App">
      {/* Posts Redux */}
      <div className="post-reducer-preview">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      {/* TODO Redux */}
      <div className="todo-reducer-preview">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>

      {/* Counter Redux */}
      <div className="counter-reducer-preview">
        Clicked: {counter} times
        <button onClick={handelIncrement}>+</button>
        <button onClick={handelDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
