import ButtonPrimaryWithText from '@/components/ui/ButtonPrimaryWithText';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomerIDLogin = () => {
  const router = useRouter();

  const handleLoginCustomerID = () => {
    console.log('User logged in with Customer ID');
    router.replace('/(drawer)/(tabs)');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Customer ID"
            placeholderTextColor="#E0E0E0"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            keyboardType="visible-password"
            placeholderTextColor="#E0E0E0"
          />
          <Link href="/(login)" asChild>
            <Text style={DEFAULT_STYLES.forgotPasswordText}>Forgot MPIN?</Text>
          </Link>
          <ButtonPrimaryWithText onPress={handleLoginCustomerID}>Login</ButtonPrimaryWithText>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 25,
  },
  formInputContainer: {
    alignItems: 'center',
    gap: 25,
    marginTop: 30,
    width: '100%',
  },
  textInput: {
    borderColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 1,
    color: COLORS.light.primary,
    fontFamily: FONTS.inter.regular,
    fontSize: 18,
    padding: 15,
    width: '100%',
  },
});

export default CustomerIDLogin;
