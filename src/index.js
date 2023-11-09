import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { featuring, logger } from "./middlewares";
import rootReducer from "./reducers/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEhnancers = composeAlt(applyMiddleware(thunk, logger, featuring));
const store = createStore(rootReducer, composedEhnancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
