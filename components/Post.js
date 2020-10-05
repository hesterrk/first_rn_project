import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;

export default function Post({ user }) {
  return (
    <View>
      <Card containerStyle={{ height: "auto" }}>
        <Card.Title> {user.name} </Card.Title>
        <Card.Divider />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../mockPic.jpg")} />
        </View>
        <View style={styles.iconContainer}>
          <SimpleLineIcons
            name="heart"
            size={24}
            color="black"
            style={styles.icon}
          />
          <FontAwesome
            name="comment-o"
            size={24}
            color="black"
            style={styles.icon}
          />
          <SimpleLineIcons name="paper-plane" size={24} color="black" />
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
    paddingTop: 10,
    backgroundColor: "lavender",
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    marginRight: 15,
  },
});
