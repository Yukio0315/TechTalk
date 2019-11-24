import styles from './styles';
import React from 'react';
import { connect } from 'react-redux';
import { editDone } from '../../redux/diaryList/actions/actionCreators';
import {View, Text, ScrollView, SafeAreaView, TextInput, Button} from 'react-native';

class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      title: '',
      text: '',
    }
  }

  componentWillMount() {
    this.setState({title: this.props.diaryList.selectedDiary.title, text: this.props.diaryList.selectedDiary.text})
  }

  render() {
    return (
      <SafeAreaView style={styles.edit}>
        <View><Text>Edit Diary</Text></View>
        <ScrollView>
          <View>
            <Text>Title:</Text>
            <TextInput value={this.state.title} onChangeText={title => this.setState({title})} />
          </View>
          <View>
            <Text>Diary:</Text>
            <TextInput value={this.state.text} onChangeText={text => this.setState({text})} />
          </View>
          <Button title="Done" onPress={() => this.props.editDone(this.state, this.props.diaryList)} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => state,
  { editDone }
)(EditScreen);
