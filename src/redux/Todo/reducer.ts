import { PayloadAction, Todo } from 'models';
import { TODO_ADD_TODO, TODO_DELETE_TODO, TODO_TOGGLE_TODO } from './constants';

export interface TodoState {
  todos: Todo[];
}

const initState: TodoState = {
  todos: [],
};

function todoReducer(state = initState, action: PayloadAction): TodoState {
  switch (action.type) {
    case TODO_ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODO_DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TODO_TOGGLE_TODO:
      const findTodo = state.todos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === findTodo?.id) {
            return { ...todo, completed: !findTodo.completed };
          }
          return { ...todo };
        }),
      };
    default:
      return state;
  }
}

export default todoReducer;
