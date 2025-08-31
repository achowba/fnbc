import { FONTS } from '@/constants/fonts.constants';
import { ActionType } from '@/types';
import SvgUri from 'expo-svg-uri';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type QuickAccessItemProps = {
  item: ActionType;
};

const QuickAccessItem = ({ item }: QuickAccessItemProps) => {
  return (
    <View style={styles.container}>
      <SvgUri style={styles.actionIcon} source={item.icon} width="100%" />
      <Text style={styles.actionText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  actionIcon: {
    marginBottom: 15,
  },
  actionText: {
    fontFamily: FONTS.inter.regular,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default QuickAccessItem;
