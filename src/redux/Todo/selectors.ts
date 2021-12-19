import { RootState } from 'app/store';
import { selectProriryFilter, selectSearchFilter, selectStatusFilter } from 'redux/Filters';
import { createSelector } from 'reselect';

export const setlectTodoList = (state: RootState) => state.todos.todos;

export const selectTodoListByFilter = createSelector(
  selectSearchFilter,
  selectStatusFilter,
  selectProriryFilter,
  setlectTodoList,
  (search, status, prioriry, todos) => {
    return todos.filter((todo) => {
      if (status === 'All') {
        return prioriry.length
          ? todo.name.includes(search) && prioriry.includes(todo.prioriry)
          : todo.name.includes(search);
      }
      return (
        todo.name.includes(search) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (prioriry.length ? prioriry.includes(todo.prioriry) : true)
      );
    });
  }
);
