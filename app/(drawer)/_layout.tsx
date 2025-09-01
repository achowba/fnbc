import AccountInfo from '@/components/AccountInfo';
import Divider from '@/components/ui/Divider';
import DrawerMenuItems from '@/components/ui/DrawerMenuItems';
import { FONTS } from '@/constants/fonts.constants';
import { User } from '@/data/user.data';
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
          marginTop: 15,
        },
        drawerLabelStyle: {
          color: '#000000',
          fontFamily: FONTS.inter.medium,
          fontSize: 20,
          marginLeft: 12,
        },
      }}
    >
      {DrawerMenuItems}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    padding: 0,
    marginHorizontal: -20,
    marginBottom: 20,
  },
});

export default DrawerLayout;
