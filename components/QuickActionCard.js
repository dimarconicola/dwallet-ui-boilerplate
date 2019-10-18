import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ButtonLittle } from "./ButtonLittle";

export function QuickActionCard(props) {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.QAcompoundImage}
        source={require("../assets/images/QuickAction_Compound.png")}
      />

      <ButtonLittle />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffe41a",
    borderRadius: 6,
    marginTop: 4,
    height: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },

  QAcompoundImage: {
    width: 118,
    height: 30,
    resizeMode: "contain"
  }
});
