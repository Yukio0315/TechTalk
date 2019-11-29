import React from 'react';
import styles from './styles';
import Calender from '../Calender/Calender';
import DiaryList from '../DiaryList/DiaryList';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
            <Image source={require('../../../assets/images/book.png')} style={styles.bookImage}/>
            <Text style={styles.title}>
            Pla Pla
            </Text>
            <Image source={require('../../../assets/images/fountain-pen.png')} style={styles.penImage}/>
        </View>
          <Calender />
          <DiaryList />
      </ScrollView>
    </SafeAreaView>
  )
}
