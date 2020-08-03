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

export default function HeaderBar() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require("../assets/logo.jpeg")} />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainTitle}>ReaNactInsta</Text>
        </View>
        {/* Need an Onlick here to render MessageContainer component */}
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Ionicons name="md-send" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 65,
    height: 65,
    borderRadius: 20,
  },
  mainTitle: {
    fontWeight: "bold",
  },
  titleContainer: {
    backgroundColor: "#F7F8F8",
    flexDirection: "row",
    // Fixed border
    height: 65,
    borderBottomColor: "#D7DDE8",
    borderBottomWidth: 1,
  },
  mainTextContainer: {
    marginLeft: 80,
    alignSelf: "center",
  },
  imageContainer: {
    paddingLeft: 10,
  },
  iconContainer: {
    alignSelf: "center",
    marginLeft: 90,
    marginTop: 15,
  },
});
