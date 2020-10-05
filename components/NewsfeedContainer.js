import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import HeaderBar from "./HeaderBar";
import Post from "./Post";
import { users } from "../test-data/users";

export default function NewsFeedContainer({ navigation }) {
  const [likePost, setLikePost] = useState(0);
  return (
    <View style={styles.container}>
      <HeaderBar navigation={navigation} />

      <ScrollView>
        {users.map((user, i) => {
          return (
            <Post
              user={user}
              key={i}
              likePost={likePost}
              setLikePost={setLikePost}
            />
          );
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
