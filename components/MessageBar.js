import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AccountPopUp from "./AccountPopUp";

// This Component:
// Component is only seen when user clicks on messages
//

export default function MessageBar({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.back}>
            <Ionicons name="ios-arrow-back" size={30} color="black" />
          </View>
        </TouchableOpacity>
        {/* // Account Name Displayed here: dynamic depending account thats signed in */}
        {/* // Pop-up when click on it: shows account name, followers, add close friends buttons */}
        <View style={styles.dropDownContainer}>
          <Text> Account Name</Text>
          <TouchableOpacity onPress={() => console.log("Hi")}>
            <Ionicons name="ios-arrow-down" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.rightSideIcons}>
          <View style={styles.video}>
            <Ionicons name="ios-videocam" size={30} color="black" />
          </View>
          <View style={styles.message}>
            <Ionicons name="ios-create" size={30} color="black" />
          </View>
        </View>
      </View>

      <AccountPopUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageContainer: {
    backgroundColor: "yellow",
  },

  backContainer: {
    backgroundColor: "#F7F8F8",
    flexDirection: "row",
    // Fixed border
    height: 65,
    borderBottomColor: "#D7DDE8",
    borderBottomWidth: 1,
  },

  back: {
    alignSelf: "center",
    marginLeft: 20,
    marginTop: 15,
  },
  video: {
    alignSelf: "center",
  },

  message: {
    alignSelf: "center",
  },

  rightSideIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 100,
    marginLeft: 50,
  },

  dropDownContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 100,
  },
});
