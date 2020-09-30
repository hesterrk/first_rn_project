import "react-native-gesture-handler";
import React from "react";
import MessageBar from "./components/MessageBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsFeedContainer from "./components/NewsfeedContainer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="NewsFeedContainer" component={NewsFeedContainer} />
        <Stack.Screen name="MessageBar" component={MessageBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
