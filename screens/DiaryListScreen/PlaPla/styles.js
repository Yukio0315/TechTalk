import { StatusBar, Platform, StyleSheet } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT
  },
  titleBar: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    marginTop: 20
  },
  bookImage: {
    width: 40,
    height: 40,
    marginTop: 55,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 100,
    fontSize: 40,
    marginTop: 30,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },
  penImage: {
    width: 40,
    height: 40,
    marginTop: 55,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
