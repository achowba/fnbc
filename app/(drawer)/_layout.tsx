import AccountInfo from '@/components/AccountInfo';
import Divider from '@/components/ui/Divider';
import DrawerMenuItems from '@/components/ui/DrawerMenuItems';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { User } from '@/data/user.data';
import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
      <AccountInfo user={User} />
      <View style={styles.dividerContainer}>
        <Divider />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerTitle: () => null,
        drawerItemStyle: {
          borderRadius: 5,
          marginTop: 15,
        },
        drawerLabelStyle: {
          color: '#000000',
          fontFamily: FONTS.inter.medium,
          fontSize: 20,
          marginLeft: 12,
        },
        drawerActiveTintColor: COLORS.light.primary,
        drawerIcon: ({ size }) => <Ionicons name="menu" size={size} color={COLORS.light.primary} />,
      }}
    >
      {DrawerMenuItems}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    marginBottom: 20,
    marginHorizontal: -20,
    padding: 0,
  },
});

export default DrawerLayout;
