import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import userProfileReducer from './userProfileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  userProfile: userProfileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
