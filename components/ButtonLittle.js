import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ButtonLittle(props) {
  return (
    <TouchableOpacity style={styles.nicoContainerButtonBlack}>
      <Text style={styles.nicoContainerBtextWhite}>Invest 100 DAI</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nicoContainerButtonBlack: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
  },

  nicoContainerBtextWhite: {
    color: "#fff",
    fontFamily: "Rubik-Bold",
    fontSize: 12,
  },

});
