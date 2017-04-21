// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, sagaMiddleware, router);

function configureStore(initialState: any) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Run saga
  sagaMiddleware.run(rootSaga);

  return store;
}

export default { configureStore, history };
