import { Text as NativeText, StyleSheet } from "react-native";

import MainTheme from "../themes/MainTheme";

const styles = StyleSheet.create({
  text: {
    color: MainTheme.colors.textPrimary,
    fontSize: MainTheme.fontSizes.body,
    fontFamily: MainTheme.fonts.main,
    fontWeight: MainTheme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: MainTheme.colors.textSecondary,
  },
  colorPrimary: {
    color: MainTheme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: MainTheme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: MainTheme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
