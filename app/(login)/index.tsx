import ButtonPrimaryWithText from '@/components/ui/ButtonPrimaryWithText';
import { ICONS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <OtpInput
            numberOfDigits={4}
            placeholder="-"
            type="numeric"
            secureTextEntry={false}
            blurOnFilled
            hideStick={false}
            focusColor={COLORS.light.primary}
            theme={{
              containerStyle: styles.pinContainerStyle,
              pinCodeContainerStyle: styles.pinCodeContainerStyle,
              pinCodeTextStyle: styles.pinCodeTextStyle,
            }}
          />
        </View>
        <Text style={styles.forgotText}>Forgot MPIN?</Text>
        <View style={styles.buttonContainer}>
          <Link href="/(drawer)/(tabs)" asChild>
            <ButtonPrimaryWithText>Login</ButtonPrimaryWithText>
          </Link>
          <Link href="/customerid-login" asChild>
            <Pressable style={styles.faceIDButton}>
              <SvgUri source={ICONS.FACE_ID} height={25} width={25} style={styles.faceIDIcon} />
              <Text style={styles.faceIDButtonText}>Login with Face ID</Text>
            </Pressable>
          </Link>
        </View>
        <Text style={styles.createAccountText}>Create an account?</Text>
      </View>
      <View style={styles.footer}>
        <MaterialCommunityIcons name="lock" size={20} />
        <Text style={styles.footerText}>Secure Banking - Privacy Policy</Text>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 25,
  },
  formContainer: {
    marginBottom: 25,
    marginTop: 30,
  },
  pinContainerStyle: {
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 40,
  },
  pinCodeContainerStyle: {
    borderRadius: 8,
    height: 60,
    width: 60,
  },
  pinCodeTextStyle: {
    color: COLORS.light.primary,
  },
  forgotText: {
    color: COLORS.light.primary,
    fontFamily: FONTS.inter.regular,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 20,
    width: '100%',
  },
  faceIDButton: {
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 15,
    width: '100%',
  },
  faceIDButtonText: {
    color: '#000000',
    fontFamily: FONTS.inter.regular,
    fontSize: 18,
  },
  faceIDIcon: {
    marginRight: 10,
  },
  createAccountText: {
    color: COLORS.light.primary,
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 70,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    height: 80,
    justifyContent: 'center',
    paddingBottom: 10,
    position: 'absolute',
    width: '100%',
  },
  footerText: {
    fontFamily: FONTS.inter.regular,
    fontSize: 14,
  },
});
