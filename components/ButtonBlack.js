import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ButtonBlack(props) {
  return (
    <TouchableOpacity style={styles.nicoContainerButtonBlack}>
      <Text style={styles.nicoContainerBtextWhite}>Start Earning Now</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nicoContainerButtonBlack: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#000",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
  },

  nicoContainerBtextWhite: {
    color: "#fff",
    fontFamily: "Rubik-Bold",
    fontSize: 17,
  },

});
