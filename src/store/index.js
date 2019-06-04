import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
    createStore, applyMiddleware,
    combineReducers
} from 'redux';
import {
  BoardsReducer,
  ModalReducer
} from '../reducers'


export const store = createStore(
  combineReducers({
    boards:BoardsReducer,
    modal:ModalReducer,
  }),
  applyMiddleware(thunkMiddleware, logger)
);
