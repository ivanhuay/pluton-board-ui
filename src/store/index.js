import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import history from '../app-history';
import { connectRouter } from 'connected-react-router'
import {
    createStore, applyMiddleware,
    combineReducers
} from 'redux';
import {
  BoardsReducer,
  ModalReducer,
  UserReducer
} from '../reducers'


export const store = createStore(
  combineReducers({
    boards:BoardsReducer,
    modal:ModalReducer,
    user: UserReducer,
    router: connectRouter(history)
  }),
  applyMiddleware(thunkMiddleware, logger)
);
