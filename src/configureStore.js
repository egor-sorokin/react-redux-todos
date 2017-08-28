import { createStore } from 'redux';
import todoApp from './reducers';


const logger = (store) => (rawDispatchNext) => {
  /* eslint-disable no-console */
  if (!console.group) {
    return rawDispatchNext;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state:', 'color: black', store.getState());
    console.log('%c action:', 'color: red', action);
    const returnValue = rawDispatchNext(action);
    console.log('%c next state:', 'color: green', store.getState());
    console.groupEnd(action.type);

    return returnValue;
  };
  /* eslint-enable no-console */
};


const promise = (store) => (rawDispatchNext) => (action) => { // eslint-disable-line no-unused-vars
  if (typeof action.then === 'function') {
    return action.then(rawDispatchNext);
  }

  return rawDispatchNext(action);
};


const wrapDispatchWithMiddlewares = (store, middlewares) =>
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch); // eslint-disable-line no-param-reassign
  });

const configureStore = () => {
  const store = createStore(todoApp);
  // middlewares collect all dispatch overriding functions
  // + store.dispatch = addPromiseSupportToDispatch(store);
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    // store.dispatch = addLoggingToDispatch(store);
    middlewares.push(logger);
  }


  wrapDispatchWithMiddlewares(store, middlewares);
  return store;
};

export default configureStore;
