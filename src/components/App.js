import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const initialState = {
  message: "Działa!",
  time: new Date(),
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };
    case "addUser":
      const lastId = state.users.reduce(
        (max, user) => (max > user.id ? max : user.id),
        0,
      );
      const newUser = {
        id: lastId + 1,
        name: action.payload,
      };
      return {
        ...state,
        users: [...state.users, newUser],
      };

    case "removeUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devTools);

const App = () => {
  return (
    <Provider store={store}>
      <Task01 />
      <Task02 />
      <Task03 />
      <Task04 />
      {/* <Task05 /> */}
    </Provider>
  );
};

export default App;
