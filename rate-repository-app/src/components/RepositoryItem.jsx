import React from "react";

import { View, Image, StyleSheet } from "react-native";

import Text from "./Text";
import Maintheme from "../themes/MainTheme";

const formatNumber = (num) => {
  const numberFormatter = Intl.NumberFormat("en", { notation: "compact" });
  return numberFormatter.format(num);
};
const styles = StyleSheet.create({
  mainContainer: {
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
    flexDirection: "row",
  },
  description: {
    alignSelf: "flex-start",
    textAlign: "left",
    marginVertical: 5,
    paddingHorizontal: 5,
    fontWeight: Maintheme.fontWeights.normal,
    color: Maintheme.colors.textSecondary,
  },
  title: {
    position: "relative",
    margin: 5,
    fontWeight: Maintheme.fontWeights.bold,
    color: Maintheme.colors.textPrimary,
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
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "row",
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
});

const Item = ({ content }) => (
  <View style={styles.mainContainer}>
    <View style={styles.flexboxHeader}>
      <Image style={styles.image} source={{ uri: content.ownerAvatarUrl }} />
      <Text style={styles.title}>{content.ownerName}</Text>
    </View>
    <View Style={styles.flexboxContent}>
      <Text style={styles.description}>{content.description}</Text>
      <Text style={[styles.description, styles.language]}>
        {content.language}
      </Text>

      <View style={styles.boxContent}>
        <View style={styles.inlineBox}>
          <Text style={styles.count}>{formatNumber(content.forksCount)}</Text>
          <Text style={styles.textSecondary}>Forks</Text>
        </View>
        <View style={styles.inlineBox}>
          <Text style={styles.count}>
            {formatNumber(content.stargazersCount)}
          </Text>
          <Text style={styles.textSecondary}>Stars</Text>
        </View>
        <View style={styles.inlineBox}>
          <Text style={styles.count}> {formatNumber(content.reviewCount)}</Text>
          <Text style={styles.textSecondary}>Reviews</Text>
        </View>
        <View style={styles.inlineBox}>
          <Text style={styles.count}>
            {formatNumber(content.ratingAverage)}
          </Text>
          <Text style={styles.textSecondary}>Rating</Text>
        </View>
      </View>
    </View>
  </View>
);

const RepositoryItem = ({ item }) => <Item content={item} />;

export default RepositoryItem;
