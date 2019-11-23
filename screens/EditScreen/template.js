import Title from './Title/Title';
import Body from './Body/Body';
import styles from './styles';
import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

export default (props) => {
  console.log(props);
  return (
    <SafeAreaView style={styles.edit}>
    <View><Text>Edit Diary</Text></View>
      <ScrollView >
        <Title />
        <Body />
      </ScrollView>
    </SafeAreaView>
  )
}
