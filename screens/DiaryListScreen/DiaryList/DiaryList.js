import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment'
import { createNewDiary, selectDiary } from '../../../redux/diaryList/actions/actionCreators';
import { Card } from 'react-native-elements';

class DiaryList extends Component {
  componentDidMount() {
    const { list } = this.props.diaryList;
    if (list.slice(-1).length === 0 || moment(list.slice(-1).date).diff(new Date, "days") > 0) this.props.createNewDiary();
  }

  render() {
    const list = this.props.diaryList.list.map((diary, index) => {
      return (
        <TouchableOpacity key={`diary_${moment(diary.date).format("YYYYMMDD")}`} onPress={() => {this.props.selectDiary(diary, index)}}>
          <Card>
            <Text>Date:</Text>
            <Text>{moment(diary.date).format("YYYY-MM-DD")}</Text>
            <Text>Title:</Text>
          <Text>{diary.title}</Text>
        </Card>
        </TouchableOpacity>
      )
    }).reverse();
    return (
      <View className="diaryList">{list}</View>
    );
  }
}

export default connect(
  state => state,
  {createNewDiary, selectDiary}
)(DiaryList);
