import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import userDataReducer from './userDataSlice';

const rootReducer = combineReducers({
  userData: userDataReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
