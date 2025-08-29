import { FONTS } from '@/constants/fonts.constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginFooter = () => {
  return (
    <View style={styles.footer}>
      <MaterialCommunityIcons name="lock" size={20} />
      <Text style={styles.footerText}>Secure Banking - Privacy Policy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginFooter;
