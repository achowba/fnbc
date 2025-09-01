import BrandText from '@/components/BrandText';
import { ICONS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import SvgUri from 'expo-svg-uri';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import IconButton from './ui/IconButton';

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <IconButton
        name="menu"
        size={28}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      {title ? <Text style={styles.titleText}>{title}</Text> : <BrandText />}
      <Pressable
        style={({ pressed }) => [
          DEFAULT_STYLES.iconButton,
          pressed && DEFAULT_STYLES.buttonPressed,
        ]}
      >
        <SvgUri source={ICONS.bell} height={25} width={25} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#EEE7F3',
    flexDirection: 'row',
    height: 130,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 50,
  },
  titleText: {
    color: COLORS.light.primary,
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Header;
