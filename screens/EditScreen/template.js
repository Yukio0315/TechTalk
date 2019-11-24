import styles from './styles';
import React from 'react';
import { connect } from 'react-redux';
import { editDone, saveAutomatically } from '../../redux/diaryList/actions/actionCreators';
import {View, Text, ScrollView, SafeAreaView, TextInput, Button} from 'react-native';

class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      title: '',
      text: '',
      saved: false,
      timeoutId: null,
    }
  }

  componentWillMount() {
    this.setState({title: this.props.diaryList.selectedDiary.title, text: this.props.diaryList.selectedDiary.text})
  }

  componentWillUpdate() {
    if(this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
      this.setState({timeoutId: null});
    }
  }

  componentDidUpdate() {
    if(!this.state.timeoutId) {
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
        <View><Text>Edit Diary</Text></View>
        <View>{saved()}</View>
        <ScrollView>
          <View>
            <Text>Title:</Text>
            <TextInput value={this.state.title} onChangeText={title => this.setState({title, saved: false})} />
          </View>
          <View>
            <Text>Diary:</Text>
            <TextInput value={this.state.text} onChangeText={text => this.setState({text, saved: false})} />
          </View>
          <Button title="Done" onPress={() => this.props.editDone(this.state, this.props.diaryList)} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => state,
  { editDone, saveAutomatically }
)(EditScreen);
