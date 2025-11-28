import "./App.css";
import ChildComponentA from "./ChildComponentA.jsx";

function App({value, onIncrement, onDecrement}) {
  return (
    <div className="App">
      Clicked: {value} times <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default App;
