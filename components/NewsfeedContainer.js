import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderBar from "./HeaderBar";
import Post from "./Post";
import { users } from "../test-data/users";

export default function NewsFeedContainer({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderBar navigation={navigation} />

      {users.map((user, i) => {
        return <Post user={user} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
