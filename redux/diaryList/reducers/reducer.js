import LIST from '../actions/actions';
import initialState from './initialState';

const replaceListElement = (state, action) => {
  const newArray = [...state.list];
  return newArray.map((element, i) => {
    if(i === action.index) return action.diary;
    return element
  })
}

const addNewList = (state, action) => {
  let newArray = [...state.list];
  let selectedIndex = action.index;
  if(action.index === 0) {
    newArray.unshift(action.diary);
    selectedIndex = 0;
  } else if(action.index > 0) {
    newArray = [...state.list].reduce((a, c, i) => {
      if(action.index === i) a.push(action.diary);
      a.push(c);
      return a;
    }, []);
  }
  return { newArray, selectedIndex};
}

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
    case LIST.BACK_NO_EDITED:
      return Object.assign({}, state, {
        list: [...state.list].filter((val, i) => i !== action.index),
        selectedDiary: null,
        selectedIndex: null
      })
    case LIST.DELETE:
      return Object.assign({}, state, {
        list: [...state.list].filter((val, i) => i !== action.index),
        selectedDiary: null,
        selectedIndex: null
      })
    case LIST.BACK_EDITED:
      return Object.assign({}, state, {
        list: state.list,
        selectedDiary: null,
        selectedIndex: null
      })
    case LIST.DONE:
      return Object.assign({}, state, {
        list: replaceListElement(state, action),
        selectedDiary: null,
        selectedIndex: null
      })
    case LIST.AUTO_SAVE:
      return Object.assign({}, state, {
        list: replaceListElement(state, action),
        selectedDiary: action.diary,
        selectedIndex: action.index
      })
    case LIST.ADD:
      return Object.assign({}, state, {
        list: addNewList(state, action).newArray,
        selectedDiary: action.diary,
        selectedIndex: addNewList(state, action).selectedIndex
      })
    default:
      return state;
  }
};
