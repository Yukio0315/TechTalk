import styles from './styles';
import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { editDone, saveAutomatically, back, backNoEdited} from '../../redux/diaryList/actions/actionCreators';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { Input, Button } from 'react-native-elements'

class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.diaryList.selectedDiary.title,
      text: this.props.diaryList.selectedDiary.text,
      saved: false,
      timeoutId: null,
      edited: false,
    }
  }

  componentWillUpdate() {
    if(this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
      this.setState({timeoutId: null});
    }
  }

  componentDidUpdate() {
    if(!this.state.timeoutId
      && !this.state.saved
      && !!this.state.text
      && !!this.state.title
      && (this.props.diaryList.selectedDiary.title !== this.state.title
      || this.props.diaryList.selectedDiary.text !== this.state.text)
    ) {
      const timeoutId = setTimeout(() => {
          this.setState({ saved: true, timeoutId: null, edited: false });
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
      if(this.state.saved) return (<Text style={styles.savedText}>saved</Text>);
    }
    const editedButton = () => {
      if(!this.props.diaryList.selectedDiary.title && !this.props.diaryList.selectedDiary.text) {
        if(!this.state.saved && !!this.state.title && !!this.state.text) return (<TouchableOpacity style={styles.touchable}><Button title="Save" onPress={() => this.props.editDone(this.state, this.props.diaryList)} /></TouchableOpacity>);
        else {
          return (<TouchableOpacity style={styles.touchable}><Button title="Back" onPress={() => this.props.backNoEdited(this.props.diaryList.selectedIndex)} /></TouchableOpacity>);
        }
      } else {
        if(this.state.title !== this.props.diaryList.selectedDiary.title && this.state.text !== this.props.diaryList.selectedDiary.text) {
          return (<TouchableOpacity style={styles.touchable}><Button title="Save" onPress={() => this.props.editDone(this.state, this.props.diaryList)} /></TouchableOpacity>);
        } else if(this.state.title === this.props.diaryList.selectedDiary.title && this.state.text === this.props.diaryList.selectedDiary.text && !!this.state.edited) {
          return (<TouchableOpacity style={styles.touchable}><Button title="Back" onPress={() => this.props.back()} /></TouchableOpacity>);
        } else if(!this.state.saved && !!this.state.edited && !!this.state.title && !!this.state.text) {
          return (<TouchableOpacity style={styles.touchable}><Button title="Save" onPress={() => this.props.editDone(this.state, this.props.diaryList)} /></TouchableOpacity>);
        } else {
          return (<TouchableOpacity style={styles.touchable}><Button title="Back" onPress={() => this.props.back()} /></TouchableOpacity>);
        }
      }
    }
    return (
      <SafeAreaView style={styles.edit}>
        <View style={styles.head}><Text style={styles.titleText}>Edit Diary</Text></View>
        <View><Text style={styles.time}>{moment(this.props.diaryList.selectedDiary.date).format("YYYY-MM-DD")}</Text></View>
        <View style={styles.saved}>{saved()}</View>
        <ScrollView>
          <View>
            <Text style={styles.title}>Title:</Text>
            <Input placeholder="Input the Title" value={this.state.title} onChangeText={title => this.setState({title, saved: false, edited: true})} />
          </View>
          <View>
            <Text style={styles.diary}>Diary:</Text>
            <View style={styles.inputBody}>
            <TextInput
              multiline = {true}
              numberOfLines = {4}
              placeholder='What happened?'
              value={this.state.text}
              onChangeText={text => this.setState({text, saved: false, edited: true})}
            />
            </View>
          </View>
          {editedButton()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => state,
  { editDone, saveAutomatically, back, backNoEdited }
)(EditScreen);
