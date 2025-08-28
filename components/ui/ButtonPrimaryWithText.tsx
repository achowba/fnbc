import { COLORS } from '@/constants/colors.constants';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

type ButtonPrimaryProps = {
  children: React.ReactNode;
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};

const ButtonPrimaryWithText = ({ children, buttonStyles, textStyles }: ButtonPrimaryProps) => {
  return (
    <Pressable style={[styles.buttonPrimary, buttonStyles]}>
      <Text style={[styles.buttonText, textStyles]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: COLORS.light.primary,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 20,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ButtonPrimaryWithText;
