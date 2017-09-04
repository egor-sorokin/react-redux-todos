import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { createLogger } from 'redux-logger';


const thunk = (store) => (next) => (action) => // eslint-disable-line no-confusing-arrow
  typeof action === 'function' ?
    action(store.dispatch) :
    next(action);


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
