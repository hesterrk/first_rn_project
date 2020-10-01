import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import HeaderBar from "./HeaderBar";
import Post from "./Post";
import { users } from "../test-data/users";

export default function NewsFeedContainer({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderBar navigation={navigation} />
      <ScrollView>
        {users.map((user, i) => {
          return <Post user={user} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
