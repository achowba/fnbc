import { COLORS } from '@/constants/colors.constants';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

type ButtonPrimaryProps = {
  children: React.ReactNode;
  onPress?: () => void;
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};

const ButtonPrimaryWithText = ({
  children,
  onPress,
  buttonStyles,
  textStyles,
}: ButtonPrimaryProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.buttonPrimary, buttonStyles, pressed && styles.pressed]}
      onPress={onPress!}
    >
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
  pressed: {
    opacity: 0.7,
  },
});

export default ButtonPrimaryWithText;
