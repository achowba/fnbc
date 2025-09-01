import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const QuickLoan = () => {
  return (
    <View style={styles.container}>
      <Link href="/">Quick Loan</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...DEFAULT_STYLES.blankScreenContainer,
  },
});

export default QuickLoan;
