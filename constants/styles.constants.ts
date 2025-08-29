import { StyleSheet } from "react-native";
import { COLORS } from "./colors.constants";
import { FONTS } from "./fonts.constants";

export const DEFAULT_STYLES = StyleSheet.create({
  textInput: {

  },
  forgotPasswordText: {
    color: COLORS.light.primary,
    fontFamily: FONTS.inter.regular,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
  },
})
