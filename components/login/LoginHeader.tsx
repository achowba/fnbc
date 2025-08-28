import { FNBC_LOGO } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerTextSmall}>Bank at your finger tips</Text>
        <Text style={styles.headerTextLarge}>Login Method</Text>
      </View>
      <View style={styles.headerImageContainer}>
        <Image style={styles.headerImage} source={FNBC_LOGO} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.light.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  headerTextSmall: {
    color: '#FFFFFF90',
    fontFamily: FONTS.inter.regular,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  headerTextLarge: {
    color: '#FFFFFF',
    fontFamily: FONTS.inter.semibold,
    fontSize: 26,
    fontWeight: 'semibold',
  },
  headerImageContainer: {
    borderColor: '#FFFFFF',
    borderRadius: 6,
    borderWidth: 2,
    height: 65,
    width: 65,
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },
});

export default LoginHeader;
