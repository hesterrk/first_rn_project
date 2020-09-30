import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

export default function Post({ user }) {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Title> {user.name} </Card.Title>
        <Card.Divider />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "purple",
  },
});
