import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Maintheme from "../themes/MainTheme";

const styles = StyleSheet.create({
  mainContainer: {
    width: "95%",
    alignSelf: "center",
    margin: 2,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#010101",
    shadowRadius: 5,
    elevation: 3,
  },
  flexboxHeader: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 3,
  },
  image: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  flexboxContent: {
    flexDirection: "column",
  },
  description: {
    position: "relative",
    textAlign: "left",
    padding: 5,
    maxWidth: "95%",
    fontWeight: Maintheme.fontWeights.normal,
    color: Maintheme.colors.textSecondary,
  },
  title: {
    position: "relative",
    margin: 5,
    fontWeight: Maintheme.fontWeights.bold,
    color: Maintheme.colors.textPrimary,
  },
  titleText: {
    fontWeight: Maintheme.fontWeights.bold,
    fontSize: Maintheme.fontSizes.body,
  },
  count: {
    fontWeight: Maintheme.fontWeights.bold,
    color: Maintheme.colors.textPrimary,
    textShadowColor: "rgba(138, 138, 138, 0.3)",

    textShadowRadius: 4,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
  },
  boxContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    flexDirection: "row",

    justifyContent: "flex-start",
    alignContent: "space-around",
  },
  textSecondary: {
    fontWeight: Maintheme.fontWeights.normal,
    color: Maintheme.colors.textSecondary,
    textShadowColor: "rgba(138, 138, 138, 0.3)",

    textShadowRadius: 4,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
  },
  inlineBox: {
    padding: 10,
    alignItems: "center",
    marginHorizontal: 10,
  },

  language: {
    fontWeight: Maintheme.fontWeights.bold,
    padding: 5,
    marginHorizontal: 5,
    position: "relative",
    alignSelf: "flex-start",
    flex: 1,
    backgroundColor: "#0365d0",
    textAlign: "center",
    borderRadius: 4,
    color: "white",
  },
  touchable: {
    borderRadius: 10,
  },
  ratingNumber: {
    fontSize: Maintheme.fontSizes.subheading,
    fontWeight: Maintheme.fontWeights.bold,
    width: 40,
    height: 40,
    color: "#0365d0",
    borderColor: "#0365d0",
    borderWidth: 2,
    borderRadius: 33,

    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlignVertical: "center",
  },
  ratingBox: {
    height: "100%",
    position: "relative",
    maxWidth: 40,
    minWidth: 40,
    flex: 1,
    margin: 5,
    marginLeft: 1,
    alignSelf: "flex-start",
  },
});
const Item = ({ content }) => {
  if (content) {
    const date = new Date(content.createdAt);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.boxContent}>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingNumber}>{content.rating}</Text>
          </View>
          <View style={styles.flexboxContent}>
            <View style={styles.title}>
              <Text style={styles.titleText}>{content.user.username}</Text>
              <Text style={styles.textSecondary}>
                {date.toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.textSecondary}>{content.text}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <Text
      style={[styles.titleText, styles.mainContainer, { textAlign: "center" }]}
    >
      This Repository has no reviews.
    </Text>
  );
};

const RepositoryReview = ({ item }) => {
  return <Item content={item} />;
};

export default RepositoryReview;
