import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// This Component:
// Component is only seen when user clicks on messages
//

export default function MessageBar({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.iconContainer}>
            <Ionicons name="ios-arrow-back" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Ionicons name="ios-videocam" size={30} color="black" />
          </View>
          <View>
        <Ionicons name="md-clipboard" size={30} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  backContainer: {
    backgroundColor: "#F7F8F8",
    flexDirection: "row",
    // Fixed border
    height: 65,
    borderBottomColor: "#D7DDE8",
    borderBottomWidth: 1,
  },

  iconContainer: {
    alignSelf: "center",
    marginLeft: 20,
    marginTop: 15,
  },
});
