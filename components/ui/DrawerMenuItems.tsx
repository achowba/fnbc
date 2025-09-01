import { ICONS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { MaterialIcons } from '@expo/vector-icons';
import Drawer from 'expo-router/drawer';
import SvgUri from 'expo-svg-uri';
import React from 'react';

const ICON_WIDTH = 35;
const ICON_HEIGHT = 35;

const DrawerMenuItems = [
  <Drawer.Screen
    key="(tabs)"
    name="(tabs)"
    options={{
      headerShown: false,
      drawerLabel: 'Home',
      drawerIcon: () => (
        <MaterialIcons name="home-filled" size={ICON_WIDTH} color={COLORS.light.primary} />
      ),
      // drawerItemStyle: { display: 'none' },
    }}
  />,
  <Drawer.Screen
    key="person-management"
    name="person-management"
    options={{
      drawerLabel: 'Person Management',
      headerTitle: 'Person Management',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.person} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
  <Drawer.Screen
    key="transfer"
    name="transfer"
    options={{
      drawerLabel: 'Transfer',
      headerTitle: 'Transfer',
      headerShown: true,
      drawerIcon: () => (
        <SvgUri source={ICONS.currency_exchange} width={ICON_WIDTH} height={ICON_HEIGHT} />
      ),
    }}
  />,
  <Drawer.Screen
    key="scan-to-pay"
    name="scan-to-pay"
    options={{
      drawerLabel: 'Scan to Pay',
      headerTitle: 'Scan to Pay',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.qr_code1} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
  <Drawer.Screen
    key="utilities"
    name="utilities"
    options={{
      drawerLabel: 'Utilities',
      headerTitle: 'Utilities',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.bolt} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
  <Drawer.Screen
    key="quick-loan"
    name="quick-loan"
    options={{
      drawerLabel: 'Quick Loan',
      headerTitle: 'Quick Loan',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.bag} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
  <Drawer.Screen
    key="statement"
    name="statement"
    options={{
      drawerLabel: 'Statement',
      headerTitle: 'Statement',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.receipt1} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
  <Drawer.Screen
    key="top-up"
    name="self-top-up"
    options={{
      drawerLabel: 'Self Top-Up',
      headerTitle: 'Self Top-Up',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.atm} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
  <Drawer.Screen
    key="locator"
    name="locator"
    options={{
      drawerLabel: 'Locator',
      headerTitle: 'Locator',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.marker} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
  <Drawer.Screen
    key="contact-us"
    name="contact-us"
    options={{
      drawerLabel: 'Contact Us',
      headerTitle: 'Contact Us',
      headerShown: true,
      drawerIcon: () => (
        <SvgUri source={ICONS.support_agent} width={ICON_WIDTH} height={ICON_HEIGHT} />
      ),
    }}
  />,
  <Drawer.Screen
    key="refer"
    name="refer"
    options={{
      drawerLabel: 'Refer',
      headerTitle: 'Refer',
      headerShown: true,
      drawerIcon: () => <SvgUri source={ICONS.share} width={ICON_WIDTH} height={ICON_HEIGHT} />,
    }}
  />,
];

export default DrawerMenuItems;
