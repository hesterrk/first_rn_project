import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// This component displays when on direct message page, click on account name arrow
//When you tap on it anywhere it goes back to direct message component

export default function AccountPopUp({ popUpOpen, setpopUpOpen }) {
  return (
    <View style={styles.popUpContainer}>
      <Modal animationType="slide" transparent={true} visible={popUpOpen}>
        <TouchableOpacity onPress={() => console.log("Hiii")}>
          <View style={styles.more}>
            <Ionicons name="ios-more" size={30} color="lightgrey" />
          </View>
        </TouchableOpacity>
        <View style={styles.accountDisplay}>
          <View style={styles.accountPic} />
          <Ionicons name="md-checkmark-circle" size={30} color="royalblue" />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.popUpButton}>
            {/* // Show dynamic number of followers! */}
            <Button title="Followers" color="black" />
          </View>
          <View style={styles.popUpButton}>
            <Button title="Add Close Friends" color="black" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  popUpContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "grey",
    paddingBottom: 10,
    // marginTop: 550,
  },
  more: {
    alignSelf: "center",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    width: "100%",
  },

  popUpButton: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    width: "40%",
  },
  accountDisplay: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },

  accountPic: {
    borderWidth: 40,
    borderColor: "white",
    borderRadius: 40,
  },
});
