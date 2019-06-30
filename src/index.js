import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, configureStore, getDefaultMiddleware } from "redux-starter-kit";
import { connect, Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import { actionCreators } from './reducers'
import store from './store';

// import counterAReducer, { increment as incrementA, addFive } from "./reducers/counterA";
// import counterBReducer, { increment as incrementB, addTwo } from "./reducers/counterB";


// ------

// this fires every action
// [incrementA, incrementB, addFive, addTwo].forEach(actionCreator => {
//   store.dispatch(actionCreator());
//   console.log(`After action '${actionCreator}': `, store.getState());
// });

// const actionCreators = {
//   incrementA,
//   incrementB,
//   addTwo,
//   addFive
// };

// ------

const mapState = state => state;

const ConnectedApp = connect(
  mapState,
  actionCreators
)(App);

// ------

const rootElement = document.getElementById("root");
// let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
      <ConnectedApp />
  </Provider>,
  rootElement
)

// ---- persistence ----
// <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//     <ConnectedApp />
//   </PersistGate>
// </Provider>,

// start code
// https://codesandbox.io/s/rw7ppj4z0m?from-embed

// connect
// https://react-redux.js.org/api/connect

// redux-starter-kit
// https://redux-starter-kit.js.org/introduction/quick-start

serviceWorker.unregister();