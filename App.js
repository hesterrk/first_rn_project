import "react-native-gesture-handler";
import React from "react";
import HeaderBar from "./components/HeaderBar";
import MessageBar from "./components/MessageBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NewsFeedContainer from "./components/NewsfeedContainer";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

export default function App() {
  return (
   
    <NavigationContainer>
      {/* // For each drawer we create different screen */}
      <Drawer.Navigator>
        <Drawer.Screen name="NewsfeedContainer" component={NewsFeedContainer}/>
      </Drawer.Navigator>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HeaderBar" component={HeaderBar} />
        <Stack.Screen name="MessageBar" component={MessageBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
