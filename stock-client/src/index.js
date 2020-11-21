import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./store/Reducer.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import Container from "./components/Container";
import Cryptos from "./components/Crypto";
import Watchlist from "./components/Watchlist";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App>
          <Switch>
            <Route component={Container} path="/" exact></Route>
            <Route component={Login} path="/login" exact></Route>
            <Route component={Register} path="/register" exact></Route>
            <Route component={Watchlist} path="/watchlist" exact></Route>
            <Route component={Cryptos} path="/crypto" exact></Route>
          </Switch>
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
