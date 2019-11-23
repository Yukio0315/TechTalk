import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment'
import { selectDiary, createNewDiary } from '../../redux/diaryList/actions/actionCreators';

class DiaryList extends Component {
  componentDidMount() {
    const { list } = this.props.diaryList;
    if (list.slice(-1).length === 0 || moment(list.slice(-1).date).diff(new Date, "days") > 0) this.props.createNewDiary();
  }

  render() {
    const list = this.props.diaryList.list.map(diary => {
      return (
        <View key={`diary_${diary.date}`}>
          <Text className="date-head">Date:</Text>
          <Text className="date">{moment(diary.date).format("YYYY-MM-DD")}</Text>
          <Text className="title-head">Title:</Text>
          <Text className="title">{diary.title}</Text>
        </View>
      )
    });
    return (
      <View className="diaryList">{list}</View>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    createNewDiary() {
      dispatch(createNewDiary())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiaryList);
