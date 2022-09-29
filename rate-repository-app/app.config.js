import "dotenv/config";

export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    softwareKeyboardLayoutMode: "pan",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    softwareKeyboardLayoutMode: "pan",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    env: process.env.ENV,
    apollo: process.env.APOLLO_URI,
  },
};
