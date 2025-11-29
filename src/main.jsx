import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index.js'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'));
const store = createStore(rootReducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App
        // onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        // onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </Provider>
  </StrictMode>
);
