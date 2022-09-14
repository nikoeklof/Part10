import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import Maintheme from "../themes/MainTheme";

const suffix = (num) => {
  let numtoString = JSON.stringify(num);
  let parseInt = parseFloat(numtoString);
  let suffix = "";
  if (parseInt < 1000) suffix = num;
  if (parseInt >= 1000)
    suffix = numtoString.slice(0, 1) + "." + numtoString.slice(1, 2) + "k";
  if (parseInt >= 10000 && parseInt < 100000)
    suffix = numtoString.slice(0, 2) + "." + numtoString.slice(2, 3) + "k";
  if (parseInt >= 100000 && parseInt < 1000000)
    suffix = numtoString.slice(0, 3) + "." + numtoString.slice(3, 4) + "k";
  if (parseInt >= 1000000 && parseInt < 10000000)
    suffix = numtoString.slice(0, 1) + "." + numtoString.slice(1, 2) + "m";

  return suffix;
};
const styles = StyleSheet.create({
  mainContainer: {
    margin: 2,
    padding: 10,
    backgroundColor: "#d7ebf7",
    borderRadius: 10,
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
    marginVertical: 5,
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
  },
  boxContent: {
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "row",
  },
  textSecondary: {
    fontWeight: Maintheme.fontWeights.normal,
    color: Maintheme.colors.textSecondary,
  },
  inlineBox: {
    padding: 10,
    alignItems: "center",
    marginHorizontal: 10,
  },
  language: {
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
      <Text style={styles.title}>{content.fullName}</Text>
    </View>
    <View Style={styles.flexboxContent}>
      <Text style={styles.description}> {content.description}</Text>
      <Text style={[styles.description, styles.language]}>
        {content.language}
      </Text>

      <View style={styles.boxContent}>
        <View style={styles.inlineBox}>
          <Text style={styles.count}>{suffix(content.forksCount)}</Text>
          <Text style={styles.textSecondary}>Forks</Text>
        </View>
        <View style={styles.inlineBox}>
          <Text style={styles.count}> {suffix(content.stargazersCount)}</Text>
          <Text style={styles.textSecondary}>Stars</Text>
        </View>
        <View style={styles.inlineBox}>
          <Text style={styles.count}> {suffix(content.reviewCount)}</Text>
          <Text style={styles.textSecondary}>Reviews</Text>
        </View>
        <View style={styles.inlineBox}>
          <Text style={styles.count}> {suffix(content.ratingAverage)}</Text>
          <Text style={styles.textSecondary}>Rating</Text>
        </View>
      </View>
    </View>
  </View>
);

const RepositoryItem = ({ item }) => <Item content={item} />;

export default RepositoryItem;
