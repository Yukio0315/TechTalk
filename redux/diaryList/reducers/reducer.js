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
    case LIST.EDIT:
      return Object.assign({}, state, {
        list: [...state.list].splice(action.index, 1, action.diary),
        selectedDiary: state.diary,
        selectedIndex: state.index
      })
    default:
      return state;
  }
};
