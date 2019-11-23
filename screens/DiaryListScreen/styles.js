import {Text, View, StatusBar, Platform, StyleSheet } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default StyleSheet.create({
  diarylist: {
    flex:1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT
  }
})
