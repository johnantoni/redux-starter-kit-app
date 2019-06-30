import { combineReducers } from "redux-starter-kit";

// import counterAReducer from "./reducers/counterA";
// import counterBReducer from "./reducers/counterB";

import counterAReducer, { increment as incrementA, addFive } from "./reducers/counterA";
import counterBReducer, { increment as incrementB, addTwo } from "./reducers/counterB";
import todosReducer, { loadTodos, fetchTodos } from "./reducers/todosReducer"

const rootReducer = combineReducers({
  counterA: counterAReducer,
  counterB: counterBReducer,
  todos: todosReducer
})

export default rootReducer

export const actionCreators = {
  incrementA,
  incrementB,
  addTwo,
  addFive,
  fetchTodos
};
