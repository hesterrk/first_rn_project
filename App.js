import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import HeaderBar from "./components/HeaderBar";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <HeaderBar />
    </View>
  );
}
