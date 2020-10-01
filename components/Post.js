import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-elements";

// ADD IMAGE => mockPic.jpg

export default function Post({ user }) {
  return (
    <View>
      <Card containerStyle={{ backgroundColor: "#ECE9E6", height: 200 }}>
        <Card.Title> {user.name} </Card.Title>
        <Card.Divider />
        <View style={styles.imageContainer}>
          <Image
            resizeMethod={"scale"}
            style={styles.image}
            source={require("../mockPic.jpg")}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    // GET THE PICTURE TO FILL THE WHOLE CARD CONTAINER SOMEHOW 
  image: {
    width: 120,
    height: 120,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
