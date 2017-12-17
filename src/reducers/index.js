import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TodoFormReducer from './TodoFormReducer';
import TodoReducer from './TodoReducer';

export default combineReducers({
  auth: AuthReducer,
  todoForm: TodoFormReducer,
  todoList: TodoReducer
});