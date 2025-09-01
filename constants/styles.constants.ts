import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./colors.constants";
import { FONTS } from "./fonts.constants";

export const DEFAULT_STYLES = StyleSheet.create({
  forgotPasswordText: {
    color: COLORS.light.primary,
    fontFamily: FONTS.inter.regular,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
  },
  iconButton: {
    alignItems: 'center',
    borderColor: '#E0D9E4',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: 50,
  },
  buttonPressed: {
    opacity: 0.5
  },
  transactionIconContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 20,
  },
  transactionIcon: {
    transform: [{ rotate: '45deg' }],
  },
  blankScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const CARD_WIDTH = Dimensions.get('window').width - 50;

