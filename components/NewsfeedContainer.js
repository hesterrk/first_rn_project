import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";
import HeaderBar from "./HeaderBar";

export default function NewsFeedContainer({navigation}) {
  return (
    <View style={styles.container}>
      <HeaderBar navigation={navigation} />
      <Card style={styles.card}>
        <Card.Title> Post </Card.Title>
        <Card.Divider />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4E5E6",
    flex: 1,
  },
});
