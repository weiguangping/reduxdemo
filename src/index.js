import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Root from "./root";
import { counter } from "./index.redux";

const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

// function render() {

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);
// }
// render();
// store.subscribe(render);
