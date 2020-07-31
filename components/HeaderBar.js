import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';


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
            <View style={styles.iconContainer}>
              <Ionicons name="md-send" size={30} color="black" />
              </View>
            </View>          
        </SafeAreaView>
      );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logo: {
      width: 65,
      height: 65,
      borderRadius: 20
    },
    mainTitle: {
      fontWeight: "bold"
      
    },
    titleContainer: {
      backgroundColor: "#F7F8F8",
      flexDirection: "row",
      // Fixed border 
      height: 65,
      borderBottomColor: '#D7DDE8',
      borderBottomWidth: 1
  
    },
    mainTextContainer: {
      marginLeft: 80,
      alignSelf: "center"
  
    },
    imageContainer: {
      paddingLeft: 10
    },
    iconContainer: {
      alignSelf: "center",
      marginLeft: 100
  
    }
  });