import DiaryList from '../../features/DiaryList/DiaryList'
import styles from './styles'
import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native'

export default () => {
  return (
    <SafeAreaView style={styles.diarylist}>
      <ScrollView style={styles.list}>
        <View className="diary">
          <Text className="title">My Dayly Diary</Text>
          <DiaryList />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
