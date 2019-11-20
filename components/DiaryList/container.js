import { connect } from 'react-redux';
import { selectDiary, createNewDiary } from '../../redux/diaryList/actions/actionCreators';
import DiaryList from './DiaryList';

export default connect(
  state => ({
    list: state.list,
    selectedDiary: state.selectedDiary,
  }),
  { selectDiary, createNewDiary }
)(DiaryList);
