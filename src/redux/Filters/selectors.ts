import { RootState } from 'app/store';

export const selectSearchFilter = (state: RootState) => state.filter.search;
export const selectStatusFilter = (state: RootState) => state.filter.status;
export const selectProriryFilter = (state: RootState) => state.filter.priority;
