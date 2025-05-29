import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Button({ label, onPress }: any) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <FontAwesome
          name="calculator"
          size={18}
          color="#25292e"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#00cba9"
  },
  buttonIcon: {
    color: "#000",
    fontSize: 25,
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#000",
    fontSize: 25,
  },
});
