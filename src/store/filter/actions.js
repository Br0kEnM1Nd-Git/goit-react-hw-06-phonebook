import { CHANGE_FILTER } from './types';

const changeFilterAction = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export { changeFilterAction };
