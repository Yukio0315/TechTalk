import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import moduleName from 'module';

const DiaryList = ({ list }) => {
  return (
    <View className="DiaryList">
      {list.map(diary => {
        return (
          <View key={`diary_${diary.date}`}>
            <Text className="date">{diary.date}</Text>
            <Text className="title">{diary.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default DiaryList;

DiaryList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};

DiaryList.defaultProps = {
  list: [{ title: '', text: '' }],
};
