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
    // marginTop: 20,
    height: 100,
    // marginTop: 50,
    paddingTop: 30
  },
  titleText: {
    fontSize: 30,
  }
})
