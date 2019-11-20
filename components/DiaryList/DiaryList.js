import React from 'react';
import PropTypes from 'prop-types';

const DiaryList = ({ list }) => {
  return (
    <div className="DiaryList">
      {list.map(diary => {
        return (
          <div key={`diary_${diary.date}`}>
            <div className="date">{diary.date}</div>
            <div className="title">{diary.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DiaryList;

DiaryList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};

DiaryList.defaultProps = {
  list: { title: '', text: '' },
};
