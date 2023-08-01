import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BoxScreen2 = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwo}></View>
      <View style={styles.viewThree}></View>
    </View>
  );
};

export default BoxScreen2;

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOne: {
    backgroundColor: 'pink',
    height: 100,
    width: 100
  },
  viewTwo: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    top: 100
  },
  viewThree: {
    backgroundColor: 'purple',
    height: 100,
    width: 100
  }
});
