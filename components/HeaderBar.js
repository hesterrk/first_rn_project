import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

//ToDo on component:
// This component needs to stay in user's sight as they scroll down the app like Instagram
// Direct message icon needs to be a button thats clickable and renders another component
// Camera should be where you can upload a picture

export default function HeaderBar({ navigation }) {
  return (
    // <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.titleContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require("../assets/logo.jpeg")} />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainTitle}> Native Insta</Text>
      </View>
      {/* Need an Onlick here to render MessageContainer component */}
      <TouchableOpacity onPress={() => navigation.navigate("MessageBar")}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-send" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "lavender",
  // },
  logo: {
    width: 65,
    height: 65,
    borderRadius: 20,
  },
  mainTitle: {
    fontWeight: "bold",
  },
  titleContainer: {
    display: "flex",
    // backgroundColor: "#F7F8F8",
    backgroundColor: "white",
    flexDirection: "row",
    // Fixed border
    borderBottomColor: "#D7DDE8",
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
  },
  mainTextContainer: {
    alignSelf: "center",
  },
  imageContainer: {
    paddingLeft: 5,
  },
  iconContainer: {
    alignSelf: "center",
    paddingRight: 5,
  },
});
