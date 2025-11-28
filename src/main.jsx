import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from '@reduxjs/toolkit'
import counter from './reducers/index.js'

const root = createRoot(document.getElementById('root'));
const store = createStore(counter);
console.log(store.getState());

const render = () => root.render(
  <StrictMode>
    <App
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />
  </StrictMode>
);

render();
store.subscribe(render);
