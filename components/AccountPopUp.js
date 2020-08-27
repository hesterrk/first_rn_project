import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Modal,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// This component displays when on direct message page, click on account name arrow

export default function AccountPopUp({ popUpOpen, setPopUpOpen }) {
  return (
    <View style={styles.popUpContainer}>
      <Modal animationType="fade" transparent={true} visible={popUpOpen}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => {
                setPopUpOpen(!popUpOpen);
              }}
            >
              <View style={styles.more}>
                <Ionicons name="ios-more" size={30} color="lightgrey" />
              </View>
            </TouchableOpacity>

            <View style={styles.accountDisplay}>
              <View style={styles.accountPic} />
              <View style={styles.nameAndIcon}>
                {/* // Show dynamic account name */}
                <Text> Account Name </Text>
                <Ionicons
                  name="md-checkmark-circle"
                  size={30}
                  color="royalblue"
                />
              </View>
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
  },

  modalBackground: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "flex-end",
  },

  modalContainer: {
    backgroundColor: "white",
    paddingTop: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 40,
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },

  accountPic: {
    borderWidth: 40,
    borderColor: "lightblue",
    borderRadius: 40,
  },

  nameAndIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
});
