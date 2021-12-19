import { combineReducers } from 'redux';
import filterReducer from 'redux/Filters/reducer';
import todoReducer from 'redux/Todo/reducer';

const rootReducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducers;
