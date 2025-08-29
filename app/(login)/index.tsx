import ButtonPrimaryWithText from '@/components/ui/ButtonPrimaryWithText';
import { ICONS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Link, useRouter } from 'expo-router';
import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

const Login = () => {
  const router = useRouter();

  const handleLoginWithPin = () => {
    console.log('User logged in with MPIN');
    router.replace('/(drawer)/(tabs)');
  };

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

        <Link href="/customerid-login" asChild>
          <Text style={DEFAULT_STYLES.forgotPasswordText}>Forgot MPIN?</Text>
        </Link>

        <View style={styles.buttonContainer}>
          <ButtonPrimaryWithText onPress={handleLoginWithPin}>Login</ButtonPrimaryWithText>
          <Pressable style={styles.faceIDButton} onPress={handleLoginWithPin}>
            <SvgUri source={ICONS.FACE_ID} height={25} width={25} style={styles.faceIDIcon} />
            <Text style={styles.faceIDButtonText}>Login with Face ID</Text>
          </Pressable>
        </View>
        <Link href="/customerid-login" asChild>
          <Text style={styles.createAccountText}>Create an account?</Text>
        </Link>
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
});
