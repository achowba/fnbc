import { ICONS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { UserType } from '@/types';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Link } from 'expo-router';
import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

type AccountInfoProps = {
  user: UserType;
};

const AccountInfo = ({ user }: AccountInfoProps) => {
  const copyAccountNumber = async () => {
    await Clipboard.setStringAsync(user.accountNumber.toString());

    Toast.show({
      type: 'customInfo',
      text1: 'Account number copied to clipboard!',
    });

    console.log(`Account number copied`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Link href="/(drawer)/(tabs)/settings" asChild>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{user.name}</Text>
          <Ionicons name="chevron-forward" size={30} color={COLORS.light.primary} />
        </View>
      </Link>
      <View style={styles.accountNumberContainer}>
        <Text style={styles.accountNumberText}>A/C No.: {user.accountNumber}</Text>
        <Pressable onPress={copyAccountNumber}>
          <SvgUri source={ICONS.copy_black} height={20} width={20} />
        </Pressable>
      </View>
      <View style={styles.accountTypeContainer}>
        <Text style={styles.accountTypeText}>
          {user.accountsCount} {user.accountsCount === 1 ? 'Account' : 'Accounts'}
        </Text>
        <MaterialIcons name="circle" size={5} color="#00000070" />
        <Text style={styles.accountTypeText}>{user.accountType}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  welcomeText: {
    color: '#00000070',
    fontSize: 20,
    marginBottom: 18,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    alignItems: 'center',
    color: '#000000',
    fontFamily: FONTS.inter.semibold,
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 14,
  },
  accountNumberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
  accountNumberText: {
    color: COLORS.light.primary,
    fontSize: 18,
    marginRight: 10,
  },
  accountTypeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  accountTypeText: {
    color: '#00000070',
    fontSize: 18,
  },
});

export default AccountInfo;
