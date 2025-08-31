import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

type IconButtonProps = {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  onPress?: () => void;
};

const IconButton = ({ name, size, onPress }: IconButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [DEFAULT_STYLES.iconButton, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={name} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
