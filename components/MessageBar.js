import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AccountPopUp from "./AccountPopUp";

export default function MessageBar({navigation}) {
  const [popUpOpen, setPopUpOpen] = useState(false);

  return (
    // <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.backContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.back}>
          <Ionicons name="ios-arrow-back" size={30} color="black" />
        </View>
      </TouchableOpacity>
      {/* // Account Name Displayed here: dynamic depending account thats signed in */}
      {/* // Pop-up when click on it: shows account name, followers, add close friends buttons */}

      <View style={styles.dropDownContainer}>
        <Text> Account Name</Text>
        <TouchableOpacity onPress={() => setPopUpOpen(true)}>
          <Ionicons name="ios-arrow-down" size={20} color="black" />
        </TouchableOpacity>

        {popUpOpen && (
          <AccountPopUp popUpOpen={popUpOpen} setPopUpOpen={setPopUpOpen} />
        )}
      </View>

      <View style={styles.rightSideIcons}>
        <View style={styles.video}>
          <Ionicons name="ios-videocam" size={30} color="black" />
        </View>
        <View style={styles.message}>
          <Ionicons name="ios-create" size={30} color="black" />
        </View>
      </View>
    </SafeAreaView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  // },

  backContainer: {
    backgroundColor: "#F7F8F8",
    flexDirection: "row",
    // Fixed border
    borderBottomColor: "#D7DDE8",
    borderBottomWidth: 1,
    height: "auto",
    height: 120,
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
    flexDirection: "row",
    marginLeft: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
