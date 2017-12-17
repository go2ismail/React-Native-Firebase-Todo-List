import {
    TODO_UPDATE,
    TODO_CREATE,
    TODO_SAVE_SUCCESS
  } from '../actions/types';
  
  const INITIAL_STATE = {
    todoitem: '',
    isdone: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TODO_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case TODO_CREATE:
        return INITIAL_STATE;
      case TODO_SAVE_SUCCESS:
        return INITIAL_STATE;
      default:
        return state;
    }
  };
  