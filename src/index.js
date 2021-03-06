import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import { createStore } from "redux";
import reducer from "./redux/reducers/reducers";
import { Provider } from "react-redux";
import quizContainer from "./components/container/Quiz";
import wsContainer from "./components/container/WelcomeScreen";

const store = createStore(reducer);
console.log(store.getState());

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex-container">
          <Route exact path="/" component={wsContainer} />
          <Route exact path="/quiz" component={quizContainer} />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
