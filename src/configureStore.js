import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  // middlewares collect all dispatch overriding functions
  // + store.dispatch = addPromiseSupportToDispatch(store);
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    // store.dispatch = addLoggingToDispatch(store);
    middlewares.push(createLogger());
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
