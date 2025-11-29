import { useState } from "react";
import "./App.css";
import ChildComponentA from "./ChildComponentA.jsx";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

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
