import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware),
  )
  : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

export default store;
