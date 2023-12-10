import initialState from './initialState';
import { CHANGE_FILTER } from './types';

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
export default filterReducer;
