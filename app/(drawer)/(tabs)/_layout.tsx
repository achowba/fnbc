import Header from '@/components/Header';
import { COLORS } from '@/constants/colors.constants';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(index)',
};

const TabsLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLORS.light.primary,
          headerLeft: () => <DrawerToggleButton />,
          tabBarStyle: {
            paddingTop: 10,
            height: 110,
          },
          tabBarLabelStyle: {
            marginTop: 5,
            fontSize: 15,
          },
          header: () => <Header />,
          animation: 'shift',
        }}
        initialRouteName="settings"
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home-filled" size={25} color={color} style={styles.tabBarIcon} />
            ),
            title: 'Home',
            header: () => <Header />,
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="receipt" size={25} color={color} style={styles.tabBarIcon} />
            ),
            title: 'Transactions',
            header: () => <Header title="Transactions" />,
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="credit-card" size={25} color={color} style={styles.tabBarIcon} />
            ),
            title: 'My Cards',
            header: () => <Header title="My Cards" />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="gear" size={25} color={color} style={styles.tabBarIcon} />
            ),
            title: 'Settings',
            header: () => <Header title="Settings" />,
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    // marginBottom: 5,
  },
});

export default TabsLayout;
