import { FILTER_CHANGE_NAME, FILTER_CHANGE_PRIORITY, FILTER_CHANGE_STATUS } from './constants';

export const filterChangeName = (name: string) => ({
  type: FILTER_CHANGE_NAME,
  payload: name,
});

export const filterChangeStatus = (status: string) => ({
  type: FILTER_CHANGE_STATUS,
  payload: status,
});

export const filterChangePriority = (priority: string[]) => ({
  type: FILTER_CHANGE_PRIORITY,
  payload: priority,
});
