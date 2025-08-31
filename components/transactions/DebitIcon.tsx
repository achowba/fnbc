import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const DebitIcon = () => {
  return (
    <View style={[DEFAULT_STYLES.transactionIconContainer, styles.container]}>
      <Ionicons
        style={DEFAULT_STYLES.transactionIcon}
        name="arrow-back"
        size={30}
        color={COLORS.light.error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${COLORS.light.error}10`,
    // backgroundColor: '#FBF0F0',
  },
});

export default DebitIcon;
