import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function AppBar({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#146eb4',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFF',
  },
});
