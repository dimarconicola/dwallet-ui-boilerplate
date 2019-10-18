import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import { ButtonBlack } from "../components/ButtonBlack";


export function EarnCard(props) {
  return (
<ImageBackground
            style={styles.nicoContainerEarn}
            source={require("../assets/images/earn-card-bg.png")}
          >
          <Image
            style={styles.nicoContainerEarnImage}
            source={require("../assets/images/earn-card-illustration.png")}
          />
          <Text style={styles.nicoContainerTitleEarn}>Earn</Text>
          <Text style={styles.nicoContainerSubtitleEarn}>
          12051 users are already earning 9.5% yearly on DAI. What are you waiting for?
          </Text>
          <ButtonBlack />
          </ImageBackground>  );
}


const styles = StyleSheet.create({

nicoContainerEarn: {
  flex: 1,
  alignItems: 'center',
  marginHorizontal: 20,
  justifyContent: 'flex-start',
  textAlign: "center",
  backgroundColor: "#A7B1FF",
  height: 370,
  padding: 20,
  overflow: "hidden",
  borderRadius: 8,
  marginTop: 4,

},

nicoContainerTitleEarn: {
  textAlign: "center",
  color: "#000",
  fontSize: 48,
  fontFamily: "Rubik-Medium"
},

nicoContainerSubtitleEarn: {
  textAlign: "center",
  color: "#000",
  fontSize: 18,
  marginTop: 4,
  fontFamily: "Rubik-Light"
},

nicoContainerEarnImage: {
  height: 120,
  resizeMode: "contain",
  marginTop: 3,
  marginBottom: 3
},

});