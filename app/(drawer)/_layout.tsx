import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{ headerTitle: '' }}>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      <Drawer.Screen
        name="transfer"
        options={{
          headerShown: true,
        }}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({});

export default DrawerLayout;
