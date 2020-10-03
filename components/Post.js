import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Card } from "react-native-elements";

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
});
