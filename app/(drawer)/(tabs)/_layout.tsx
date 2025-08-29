import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(index)',
};

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerLeft: () => <DrawerToggleButton /> }} initialRouteName="settings">
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="transactions" options={{ title: 'Transactions' }} />
      <Tabs.Screen name="cards" options={{ title: 'My Cards' }} />
      <Tabs.Screen name="settings" options={{ title: 'Setting' }} />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default TabsLayout;
