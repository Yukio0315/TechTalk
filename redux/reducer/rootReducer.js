import { combineReducers } from 'redux';
import diaryListReducer from '../diaryList/reducers/reducer';

export default combineReducers({
  diaryList: diaryListReducer,
});
