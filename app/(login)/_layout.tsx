import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import TopTabs from '@/layouts/top-tabs.layout';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginTabsLayout = () => {
  return (
    <View style={styles.container}>
      <TopTabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#F8F8F8',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            elevation: 0,
            padding: 10,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0,
            shadowRadius: 0,
          },
          tabBarActiveTintColor: COLORS.light.primary,
          tabBarInactiveTintColor: '#888888',
          tabBarLabel: ({ focused, children }) => (
            <Text
              style={
                focused
                  ? [styles.tabBarText, styles.tabBarTextActive]
                  : [styles.tabBarText, styles.tabBarTextInactive]
              }
            >
              {children}
            </Text>
          ),
        }}
      >
        <TopTabs.Screen
          name="index"
          options={{
            tabBarIndicatorStyle: [styles.tabIndicator, styles.qamTab],
            title: 'Quick Access MPIN',
          }}
        />
        <TopTabs.Screen
          name="customerid-login"
          options={{
            tabBarIndicatorStyle: [styles.tabIndicator, styles.customerIdTab],
            title: 'Customer ID',
          }}
        />
      </TopTabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.primary,
    flex: 1,
  },
  tabIndicator: {
    backgroundColor: COLORS.light.primary,
    height: 5,
  },
  qamTab: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  customerIdTab: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  tabBarText: {
    fontSize: 16,
  },
  tabBarTextActive: {
    color: COLORS.light.primary,
    fontFamily: FONTS.inter.semibold,
    fontWeight: 'semibold',
  },
  tabBarTextInactive: {
    color: '#00000060',
    fontFamily: FONTS.inter.regular,
    fontWeight: 'light',
  },
});

export default LoginTabsLayout;
