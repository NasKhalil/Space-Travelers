import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rockectsReducer from './rockets/rockets';

const reducer = combineReducers({ missionsReducer, rockets: rockectsReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
