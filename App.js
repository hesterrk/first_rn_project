import "react-native-gesture-handler";
import React from "react";
import HeaderBar from "./components/HeaderBar";
import MessageBar from "./components/MessageBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsFeedContainer from "./components/NewsfeedContainer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NewsFeedContainer />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* // header bar renders first */}
        <Stack.Screen name="HeaderBar" component={HeaderBar} />
        <Stack.Screen name="MessageBar" component={MessageBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
