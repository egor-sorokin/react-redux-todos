import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


const configureStore = () => {
  // middlewares collect all dispatch overriding functions
  // + store.dispatch = addPromiseSupportToDispatch(store);
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    // store.dispatch = addLoggingToDispatch(store);
    middlewares.push(createLogger());
  }

  return store = createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
