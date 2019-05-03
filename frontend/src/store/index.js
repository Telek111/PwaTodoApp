import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

const store = createStore(
  reducers, 
  {}, 
  applyMiddleware(reduxThunk, logger)
);

export { store };