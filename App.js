import React from 'react';
import Diary from './screens/Diary/Diary';
import { Provider } from 'react-redux';
import store from './redux/store/store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Diary />
      </Provider>
    );
  }
};
