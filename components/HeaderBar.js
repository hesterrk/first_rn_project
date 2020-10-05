import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";

//ToDo on component:
// This component needs to stay in user's sight as they scroll down the app like Instagram
// Direct message icon needs to be a button thats clickable and renders another component
// Camera should be where you can upload a picture

export default function HeaderBar({ navigation }) {
  return (
    <SafeAreaView style={styles.titleContainer}>
      <View style={styles.cameraIconContainer}>
        <SimpleLineIcons name="camera" size={30} color="black" />
      </View>
      <View style={styles.mainTextContainer}>
        <Fontisto name="instagram" size={40} color="black" />
      </View>
      {/* Need an Onlick here to render MessageContainer component */}
      <TouchableOpacity onPress={() => navigation.navigate("MessageBar")}>
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="paper-plane" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  cameraIconContainer: {
    paddingLeft: 5,
  },
  iconContainer: {
    alignSelf: "center",
    paddingRight: 5,
  },
});
