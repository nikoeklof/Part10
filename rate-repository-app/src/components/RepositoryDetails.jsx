import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Linking,
  BackHandler,
} from "react-native";

import Text from "./Text";
import Maintheme from "../themes/MainTheme";
import { useEffect } from "react";
import { useNavigate } from "react-router-native";

const formatNumber = (num) => {
  const numberFormatter = Intl.NumberFormat("en", { notation: "compact" });
  return numberFormatter.format(num);
};
const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "center",
    width: "95%",
    position: "relative",
    top: 10,
    margin: 2,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#010101",
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    justifyContent: "flex-start",
    flexDirection: "column",
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
    height: 30,
    fontWeight: Maintheme.fontWeights.bold,
    padding: 5,
    marginHorizontal: 5,

    alignSelf: "flex-start",
    flex: 1,
    backgroundColor: "#0365d0",
    textAlign: "center",
    borderRadius: 4,
    color: "white",
  },
  urlButton: {
    width: "100%",
    color: "white",
    justifyContent: "center",
    backgroundColor: "#0365d0",
    borderRadius: 4,
    textAlign: "center",
    flex: 1,
    padding: 15,
    margin: 5,
  },
  urlButtonText: {
    fontWeight: Maintheme.fontWeights.bold,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
});

const Item = (content) => {
  const navigate = useNavigate();
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
  const handleBackPress = () => {
    navigate("/");
    return true;
  };
  const handleReviewButtonPress = (id, ownerName, repoName) => {
    navigate(`/${id}/review`, {
      state: { repoId: id, repoName: repoName, ownerName: ownerName },
    });
  };
  if (content.content === true) {
    return <Text style={styles.textPrimary}>Loading...;</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.flexboxHeader}>
        <Image
          style={styles.image}
          source={{ uri: content.content.repository.ownerAvatarUrl }}
        />
        <Text style={styles.title}>{content.content.repository.fullName}</Text>
      </View>
      <View Style={styles.flexboxContent}>
        <Text style={styles.description}>
          {content.content.repository.description}
        </Text>
        <Text style={[styles.description, styles.language]}>
          {content.content.repository.language}
        </Text>

        <View style={styles.boxContent}>
          <View style={styles.inlineBox}>
            <Text style={styles.count}>
              {formatNumber(content.content.repository.forksCount)}
            </Text>
            <Text style={styles.textSecondary}>Forks</Text>
          </View>
          <View style={styles.inlineBox}>
            <Text style={styles.count}>
              {formatNumber(content.content.repository.stargazersCount)}
            </Text>
            <Text style={styles.textSecondary}>Stars</Text>
          </View>
          <View style={styles.inlineBox}>
            <Text style={styles.count}>
              {" "}
              {formatNumber(content.content.repository.reviewCount)}
            </Text>
            <Text style={styles.textSecondary}>Reviews</Text>
          </View>
          <View style={styles.inlineBox}>
            <Text style={styles.count}>
              {formatNumber(content.content.repository.ratingAverage)}
            </Text>
            <Text style={styles.textSecondary}>Rating</Text>
          </View>
        </View>
        <View style={styles.inlineBox}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="#014794"
            onPress={() => {
              if (Linking.canOpenURL(content.content.repository.url))
                Linking.openURL(content.content.repository.url);
            }}
            style={styles.urlButton}
          >
            <Text style={styles.urlButtonText}>View in GitHub</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="#014794"
            onPress={() => {
              handleReviewButtonPress(
                content.content.repository.id,
                content.content.repository.ownerName,
                content.content.repository.name
              );
            }}
            style={styles.urlButton}
          >
            <Text style={styles.urlButtonText}>Create Review</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const RepositoryDetails = (content) => {
  return <Item content={content.content} />;
};
export default RepositoryDetails;
