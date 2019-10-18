import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ButtonWhite(props) {
  return (
    <TouchableOpacity style={styles.nicoContainerButton}>
      <Text style={styles.nicoContainerBtext}>Earn</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nicoContainerButton: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#ffe41a",
    color: "#fff",
    fontFamily: "Rubik-Bold",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
  },

  nicoContainerBtext: {
    color: "#000",
    fontFamily: "Rubik-Bold",
    fontSize: 17,
  },
  

});
