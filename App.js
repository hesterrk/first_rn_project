import "react-native-gesture-handler";
import React from "react";
import MessageContainer from "./components/MessageContainer"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsFeedContainer from "./components/NewsfeedContainer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExplorePageContainer from "./components/ExplorePageContainer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomePageStackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="NewsFeedContainer" component={NewsFeedContainer} />
        <Stack.Screen name="MessageContainer" component={MessageContainer} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePageStackScreen} />
        <Tab.Screen name="Explore" component={ExplorePageContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
