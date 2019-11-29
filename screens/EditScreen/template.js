import styles from './styles';
import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { editDone, saveAutomatically } from '../../redux/diaryList/actions/actionCreators';
import {View, Text, ScrollView, SafeAreaView, TextInput, Button} from 'react-native';
import {Input} from 'react-native-elements'

class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.diaryList.selectedDiary.title,
      text: this.props.diaryList.selectedDiary.text,
      saved: false,
      timeoutId: null,
    }
  }

  componentWillUpdate() {
    if(this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
      this.setState({timeoutId: null});
    }
  }

  componentDidUpdate() {
    if(!this.state.timeoutId && !this.state.saved) {
      const timeoutId = setTimeout(() => {
          this.setState({ saved: true, timeoutId: null });
          this.props.saveAutomatically(this.state, this.props.diaryList);
      }, 3000)
      this.setState({timeoutId})
    }
  }

  componentWillUnmount() {
    if(this.state.timeoutId) clearTimeout(this.state.timeoutId);
    this.setState({timeoutId: null});
  }

  render() {
    const saved = () => {
      if(this.state.saved) return (<Text>saved</Text>);
    }
    return (
      <SafeAreaView style={styles.edit}>
        <View style={styles.head}><Text style={styles.titleText}>Edit Diary</Text></View>
        <View style={styles.time}><Text>{moment(this.props.diaryList.selectedDiary.date).format("YYYY-MM-DD")}</Text></View>
        <View style={styles.saved}>{saved()}</View>
        <ScrollView>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Title:</Text>
            <Input placeholder="Title" style={styles.input} value={this.state.title} onChangeText={title => this.setState({title, saved: false})} />
          </View>
          <View>
            <Text style={styles.diary}>Diary:</Text>
            <Input placeholder='What happened?' style={styles.input2} value={this.state.text} onChangeText={text => this.setState({text, saved: false})} />
          </View>
          <Button style={styles.done} title="Done" onPress={() => this.props.editDone(this.state, this.props.diaryList)} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => state,
  { editDone, saveAutomatically }
)(EditScreen);
