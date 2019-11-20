import LIST from '../actions/actions';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST.SHOW:
      return [...state, action];
    case LIST.CREATE:
      return [...state, action.diary];
    default:
      return state;
  }
};

// export default diaryList;
