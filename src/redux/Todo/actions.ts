import { Todo } from 'models';
import { TODO_ADD_TODO, TODO_DELETE_TODO, TODO_TOGGLE_TODO } from './constants';

export const todoAddTodo = (todo: Todo) => {
  return { type: TODO_ADD_TODO, payload: todo };
};

export const todoDeleteTodo = (id: string) => {
  return { type: TODO_DELETE_TODO, payload: id };
};

export const todoToggleTodo = (id: string) => {
  return { type: TODO_TOGGLE_TODO, payload: id };
};
