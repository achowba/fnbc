import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CreditIcon = () => {
  return (
    <View style={[DEFAULT_STYLES.transactionIconContainer, styles.container]}>
      <Ionicons
        style={DEFAULT_STYLES.transactionIcon}
        name="arrow-forward"
        size={30}
        color={COLORS.light.success}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${COLORS.light.success}10`,
    // backgroundColor: '#F0FCF3',
  },
});

export default CreditIcon;
