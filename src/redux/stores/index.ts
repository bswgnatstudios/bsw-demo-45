import {configureStore, compose} from '@reduxjs/toolkit';
import loginReducer from '../slices/loginSlice';
import userListReducer from '../slices/userSlice';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// let composeEnhancers = compose;
// if (__DEV__) {
//   composeEnhancers =
//     (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) ||
//     compose;
// }

export default function generateStore() {
  const store = configureStore({
    reducer: {
      login: loginReducer,
      user: userListReducer,
    },
  });
  return store;
}
