import { COLORS } from '@/constants/colors.constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BrandText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FNBC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: COLORS.light.primary,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 5,
    // marginRight: Platform.OS === 'android' ? 50 : 0,
  },
});

export default BrandText;
