import DiaryList from './DiaryList/DiaryList'
import styles from './styles'
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titlebar}>
            <Image source={require('../../assets/images/book.png')} style={styles.bookImage}/>
            <Text style={styles.title}>
            My Daily Diary
            </Text>
            <Image source={require('../../assets/images/fountain-pen.png')} style={styles.penImage}/>
        </View>
          <DiaryList />
      </ScrollView>
    </SafeAreaView>
  )
}
