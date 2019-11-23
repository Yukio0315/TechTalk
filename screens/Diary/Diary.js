import DiaryListScreen from '../DiaryListScreen/template';
import EditScreen from '../EditScreen/template'
import { View, Text } from 'react-native'
import { createNewDiary } from '../../redux/diaryList/actions/actionCreators'
import {connect} from 'react-redux'
import React from 'react';
import styles from './styles'

const Diary = (props) => {
  let selected = "";
  if(props.diaryList.selectedDiary === null) selected = (<DiaryListScreen />);
  if(props.diaryList.selectedDiary !== null) selected = (<EditScreen />);
  return (
    <View style={styles.diary}>{selected}</View>
  )
}

export default connect(
  state => state
)(Diary);
