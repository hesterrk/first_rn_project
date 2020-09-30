import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

export default function Post() {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Title> Post </Card.Title>
        <Card.Divider />
        <Card.FeaturedSubtitle> hi </Card.FeaturedSubtitle>
      </Card>
     
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "purple",
  },
});
