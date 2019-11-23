import React from 'react';
import DiaryListScreen from './screens/DiaryListScreen/template';
import { Provider } from 'react-redux';
import store from './redux/store/store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DiaryListScreen />
      </Provider>
    );
  }
};
