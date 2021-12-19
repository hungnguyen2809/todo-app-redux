import { PayloadAction } from 'models';
import { FILTER_CHANGE_NAME, FILTER_CHANGE_PRIORITY, FILTER_CHANGE_STATUS } from './constants';

export interface FilterState {
  search: string;
  status: string;
  priority: string[];
}

const initState: FilterState = {
  search: '',
  status: 'All',
  priority: [],
};

function filterReducer(state = initState, action: PayloadAction): FilterState {
  switch (action.type) {
    case FILTER_CHANGE_NAME:
      return {
        ...state,
        search: action.payload,
      };
    case FILTER_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case FILTER_CHANGE_PRIORITY:
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
}

export default filterReducer;
