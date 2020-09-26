import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";

export default function NewsFeedContainer() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title>Username </Card.Title>
      </Card>
      <Text> HIIIII </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});
