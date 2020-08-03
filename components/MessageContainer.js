import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

// ToDo:
// Component is the structure for Direct Messages-style
// This component will map through and render individual message components
//Grid-style with rows

export default function MessageContainer() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> M Container</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
