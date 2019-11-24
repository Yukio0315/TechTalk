import LIST from '../actions/actions';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST.SELECT:
      return Object.assign({}, state, {
        list: state.list,
        selectedDiary: action.diary,
        selectedIndex: action.index
      })
    case LIST.CREATE:
      return Object.assign({}, state, {
        list: [...state.list, action.diary],
        selectedDiary: null,
        selectedIndex: null
      })
    case LIST.DONE:
      return Object.assign({}, state, {
        list: [...state.list].slice(0, action.index).concat(action.diary),
        selectedDiary: null,
        selectedIndex: null
      })
    case LIST.AUTO_SAVE:
      return Object.assign({}, state, {
        list: [...state.list].slice(0, action.index).concat(action.diary),
        selectedDiary: action.diary,
        selectedIndex: action.index
      })
    default:
      return state;
  }
};
