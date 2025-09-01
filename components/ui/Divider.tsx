import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#00000020',
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default Divider;
