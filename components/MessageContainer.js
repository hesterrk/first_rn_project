import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Card } from "react-native-elements";
import MessageBar from "./MessageBar"
import SearchBarComponent from './SearchBar';

// Component is the structure for Direct Messages-style
// This component will Contain and map through and render individual message components
//Grid-style with rows

export default function MessageContainer({navigation}) {
  return (
    // <SafeAreaView style={styles.container}>
    <View>
    <MessageBar navigation={navigation} />
    <SearchBarComponent/>
    </View>
      // <View>
      //   <Card>
      //     <Card.Title>Username </Card.Title>
      //   </Card>
      // </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "lavender",
  },
});
