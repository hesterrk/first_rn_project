import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Card } from "react-native-elements";

// ToDo:
// Component is the structure for Direct Messages-style
// This component will Contain and map through and render individual message components
//Grid-style with rows

export default function MessageContainer() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Card>
          <Card.Title> {username} </Card.Title>
        </Card> */}
        <Text> Hi </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
