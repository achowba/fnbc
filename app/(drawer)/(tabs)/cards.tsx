import { DEFAULT_STYLES } from '@/constants/styles.constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text>Cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...DEFAULT_STYLES.blankScreenContainer,
  },
});

export default Cards;
