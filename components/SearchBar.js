import React from "react";
import {  View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


// Re-usable search bar for direct message, explore page, followers, following on profile

export default function SearchBar() {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.barContainer}>
          <Ionicons name="md-search" size={20} color="black" />
        </View>
        {/* <Text> HIIIII</Text> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: "red",
  },
});