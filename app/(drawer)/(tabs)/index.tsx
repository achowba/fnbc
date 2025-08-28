import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/(login)">Login</Link>
      <Link href="/transfer-money">Transfer Money</Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
