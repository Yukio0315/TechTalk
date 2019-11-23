import styles from './styles';
import React from 'react';
import { connect } from 'react-redux';
import { editDiary, editDone } from '../../redux/diaryList/actions/actionCreators';
import {View, Text, ScrollView, SafeAreaView, TextInput, Button} from 'react-native';

const EditScreen = (props) => {
  console.log(props);
  return (
    <SafeAreaView style={styles.edit}>
      <View><Text>Edit Diary</Text></View>
      <ScrollView>
        <View>
          <Text>Title:</Text>
          <TextInput />
        </View>
        <View>
          <Text>Diary:</Text>
          <TextInput />
        </View>
        <Button title="Done" onPress={() => props.editDone()} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(
  state => state,
  {editDiary, editDone}
)(EditScreen);
