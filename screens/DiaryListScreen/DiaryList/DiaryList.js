import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment'
import { createNewDiary, selectDiary } from '../../../redux/diaryList/actions/actionCreators';

class DiaryList extends Component {
  componentDidMount() {
    const { list } = this.props.diaryList;
    if (list.slice(-1).length === 0 || moment(list.slice(-1).date).diff(new Date, "days") > 0) this.props.createNewDiary();
  }

  render() {
    const list = this.props.diaryList.list.map(diary => {
      return (
        <TouchableOpacity key={`diary_${diary.date}`} onPress={() => {this.props.selectDiary(diary)}}>
          <View>
            <Text className="date-head">Date:</Text>
            <Text className="date">{moment(diary.date).format("YYYY-MM-DD")}</Text>
            <Text className="title-head">Title:</Text>
          <Text className="title">{diary.title}</Text>
        </View>
        </TouchableOpacity>
      )
    });
    return (
      <View className="diaryList">{list}</View>
    );
  }
}

export default connect(
  state => state,
  {createNewDiary, selectDiary}
)(DiaryList);
