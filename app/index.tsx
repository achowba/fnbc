import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { FNBC_LOGO } from '@/constants/image.constants';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTextSmall}>Bank at your finger tips</Text>
          <Text style={styles.headerTextLarge}>Login Method</Text>
        </View>
        <View style={styles.headerImageContainer}>
          <Image style={styles.headerImage} source={FNBC_LOGO} />
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text>Form</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.primary,
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 20,
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
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    padding: 25,
  },
});
