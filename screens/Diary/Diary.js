import React from 'react';
import styles from './styles'
import {connect} from 'react-redux'
import { View, Text } from 'react-native'
import EditScreen from '../EditScreen/template'
import DiaryListScreen from '../DiaryListScreen/PlaPla/template';
import { createNewDiary } from '../../redux/diaryList/actions/actionCreators'

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
