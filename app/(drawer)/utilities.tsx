import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Utilities = () => {
  return (
    <View style={styles.container}>
      <Link href="/">Utilities</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...DEFAULT_STYLES.blankScreenContainer,
  },
});

export default Utilities;
