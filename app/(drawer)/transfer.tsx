import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const TransferMoney = () => {
  return (
    <View style={styles.container}>
      <Link href="/">Transfer Money</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransferMoney;
