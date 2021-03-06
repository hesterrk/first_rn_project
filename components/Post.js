import React from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { Card } from "react-native-elements";
import { SimpleLineIcons, FontAwesome, Feather } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;

export default function Post({ user, likePost, setLikePost }) {
  return (
    <View>
      <Card containerStyle={{ height: "auto" }}>
        <Card.Title> {user.name} </Card.Title>
        <Card.Divider />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../mockPic.jpg")} />
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.leftIconContainer}>
            <SimpleLineIcons
              name="heart"
              size={24}
              color="black"
              style={styles.icon}
              onPress={() => setLikePost(likePost + 1)}
            />
            <FontAwesome
              name="comment-o"
              size={24}
              color="black"
              style={styles.icon}
            />
            <SimpleLineIcons name="paper-plane" size={24} color="black" />
          </View>
          <View>
            <Feather name="bookmark" size={24} color="black" />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.likeText}> {likePost} likes </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  imageContainer: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    height: deviceWidth * 0.8,
    width: deviceWidth * 0.8,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftIconContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    marginRight: 15,
  },
  commentContainer: {
    marginTop: 10,
  },
  likeText: {
    fontWeight: "bold",
  },
});
