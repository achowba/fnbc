import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { Href, Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type SectionTitleProps = {
  title: string;
  linkTo?: Href;
};

const SectionTitle = ({ title, linkTo }: SectionTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {linkTo && (
        <Link href={linkTo} asChild style={{ textDecorationLine: 'none' }}>
          <Text style={styles.viewAllText}>View All</Text>
        </Link>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  titleText: {
    color: '#000000',
    fontFamily: FONTS.inter.bold,
    fontSize: 22,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: COLORS.light.primary,
    fontFamily: FONTS.inter.semibold,
    fontSize: 16,
  },
});

export default SectionTitle;
