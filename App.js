import React from 'react';
import { Provider } from 'react-redux';
import DiaryList from './components/DiaryList/DiaryList';
import store from './redux/store/store';

export default () => {
  return (
    <Provider store={store}>
      <DiaryList />
    </Provider>
  );
};
