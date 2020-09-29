import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";

export default function NewsFeedContainer() {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title> Username </Card.Title>
        <Card.Divider />
      </Card>
      <Text> NewsFeed Container </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  card: {
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    borderRadius: 10,
  },
});
