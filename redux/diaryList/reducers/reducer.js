import LIST from '../actions/actions';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST.SELECT:
      return action.diary;
    case LIST.CREATE:
      return {
        ...state,
        list: [...state.list, action.diary]
      }
    default:
      return state;
  }
};
