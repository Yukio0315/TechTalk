import styles from './styles';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment'
import { addNewDiary } from '../../../redux/diaryList/actions/actionCreators';
import { Icon, Overlay } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';

class CalenderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false
    }
  }

  render() {
    const disableDays = this.props.diaryList.list.reduce((a, c, i) => {
      a[moment(c.date).format("YYYY-MM-DD")] = { disabled: true, disableTouchEvent: true};
      return a;
    }, {});
    const dateToInsertIndex =(date) => {
      return this.props.diaryList.list.reduce((a, c, i) => {
        if(i === 0 && moment(c.date).diff(date, 'day') > 0) a = 0;
        if(moment(c.date).diff(date, 'day') < 0) a =  i + 1;
        return a;
      },0);
    }
    const calendar = () => {
      if(!this.state.add) return (<View style={styles.plus}><Icon name="plus-square" type='font-awesome' onPress={() => {this.setState({add:!this.state.add})}} /></View>);
      if(this.state.add) {
        return (
         <View><View style={styles.plus}><Icon name="plus-square" type='font-awesome'/></View>
         <Overlay isVisible={this.state.add}  height="auto" onBackdropPress={() => {this.setState({add:!this.state.add})}}><Calendar
          onDayPress={(day) => {
            const index = dateToInsertIndex(day.dateString);
            this.props.addNewDiary(day.dateString, index);
            this.setState({add:!this.state.add});
          }}
          markedDates={disableDays}
          maxDate={new Date()}
        /></Overlay></View>);
      }
    }
    return (
      <TouchableOpacity>
        {calendar()}
      </TouchableOpacity>
    );
  }
}

export default connect(
  state => state,
  {addNewDiary}
)(CalenderComponent);
