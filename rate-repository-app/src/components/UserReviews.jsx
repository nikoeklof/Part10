import useGetUserReviews from "../hooks/useGetUserReviews";
import { FlatList, View, TouchableHighlight } from "react-native";
import { StyleSheet, Linking, Alert } from "react-native";
import { DELETE_REVIEW } from "../grahql/mutations";
import { useMutation } from "@apollo/client";
import Text from "./Text";
import Maintheme from "../themes/MainTheme";
import useDeleteReview from "../hooks/useDeleteReview";
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
    flex: 1,
    width: "100%",

    flexDirection: "row",
    margin: 5,
  },

  repositoryButton: {
    fontWeight: Maintheme.fontWeights.bold,
    padding: 8,
    marginHorizontal: 5,
    position: "relative",
    alignSelf: "center",

    backgroundColor: "#0365d0",

    borderRadius: 5,
  },
  deleteButton: {
    padding: 8,
    marginHorizontal: 5,
    position: "relative",

    backgroundColor: "red",
    borderRadius: 4,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: Maintheme.fontWeights.bold,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  touchable: {},
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
  backgroundlayer: {
    flex: 1,

    flexDirection: "row",
  },
  separator: {
    height: 10,
  },
});

const Item = ({ item, handleDeleteReview }) => {
  let content = item;

  if (content) {
    const date = new Date(content.createdAt);
    return (
      <View style={styles.backGroundContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.boxContent}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingNumber}>{content.rating}</Text>
            </View>
            <View style={styles.flexboxContent}>
              <View style={styles.title}>
                <Text style={styles.titleText}>
                  {content.repository.fullName}
                </Text>
                <Text style={styles.textSecondary}>
                  {date.toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.textSecondary}>{content.text}</Text>
              </View>
              <View style={styles.inlineBox}>
                <TouchableHighlight
                  activeOpacity={0.99}
                  underlayColor="#014794"
                  style={styles.repositoryButton}
                  onPress={() => {
                    if (Linking.canOpenURL(content.repository.url)) {
                      Linking.openURL(content.repository.url);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>View repository</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  activeOpacity={0.99}
                  underlayColor="#ab0000"
                  style={styles.deleteButton}
                  onPress={() =>
                    handleDeleteReview({ id: content.id, text: content.text })
                  }
                >
                  <Text style={styles.buttonText}>Delete Review</Text>
                </TouchableHighlight>
              </View>
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
      You have not reviewed any repositories.
    </Text>
  );
};
function renderItem(props) {
  return (
    <Item
      handleDeleteReview={props.handleDeleteReview}
      item={props.reviewNodes.item}
    />
  );
}

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsContainer = ({ onEndReach, reviews, handleDeleteReview }) => {
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <View style={styles.backgroundlayer}>
      <FlatList
        style={styles.list}
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.15}
        renderItem={(reviewNodes) =>
          renderItem({ reviewNodes, handleDeleteReview })
        }
        ListEmptyComponent={Item}
      />
    </View>
  );
};

const UserReviews = () => {
  const { reviews, fetchMore } = useGetUserReviews();
  const [deleteReview] = useDeleteReview();
  const handleDeleteReview = (review) => {
    console.log(review);
    Alert.alert(
      "Delete Review",
      `Are you sure you want to delete this review: ${review.text}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("No pressed"),
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            console.log("Yes pressed");
            deleteReview({ id: review.id });
          },
        },
      ]
    );
  };
  const onEndReach = () => {
    fetchMore();
  };

  return (
    <UserReviewsContainer
      handleDeleteReview={handleDeleteReview}
      reviews={reviews}
      onEndReach={onEndReach}
    />
  );
};

export default UserReviews;
