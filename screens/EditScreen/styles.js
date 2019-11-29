import { StatusBar, Platform, StyleSheet } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default StyleSheet.create({
  edit: {
    flex:1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
    marginBottom: 100,
    paddingTop: 100
  },
  head: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'green',
    height: 100,
    paddingTop: 30
  },
  time: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 20,
  },
  saved: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    height: 300,
  },
  savedText: {
    color: 'red'
  },
  title: {
    marginLeft: 10
  },
  titleText: {
    fontSize: 30,
  },
  diary: {
    marginLeft: 10,
  },
  inputBody: {
    height: 500,
    marginLeft: 10,
    marginRight: 10
  },
  touchable: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
