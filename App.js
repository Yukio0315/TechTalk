import React from 'react';
// import DiaryListScreen from './screens/DiaryListScreen';
import DiaryList from './components/DiaryList/DiaryList';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import {Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DiaryList />
      </Provider>
    );
  }
};
