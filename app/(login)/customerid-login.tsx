import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomerIDLogin = () => {
  return (
    <View style={styles.container}>
      <Text>Login With Customer ID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default CustomerIDLogin;
