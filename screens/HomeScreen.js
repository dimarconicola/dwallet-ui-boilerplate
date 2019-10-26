import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { EarnCard } from "../components/EarnCard";
import { ButtonWhite } from "../components/ButtonWhite";
import { QuickActionCard } from "../components/QuickActionCard";
import AccordionComponent from "../components/AccordionComponent";
import { Portal, ActivityIndicator } from "react-native-paper";
import ModalTemplate from "../components/ModalTemplate";

export default function HomeScreen() {
  return (
  
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <ActivityIndicator />

        <EarnCard />

        <ModalTemplate />

        <QuickActionCard />

        <AccordionComponent />

        <View style={styles.nicoContainerCompound}>
          <Image
            style={styles.nicoContainerImage}
            source={require("../assets/images/compound.png")}
          />
          <Text style={styles.nicoContainerTitle}>Compound</Text>
          <Text style={styles.nicoContainerSubtitle}>
            Ciao liquidity to Compound.finance and start earning annual
            interest now!
          </Text>
          <ButtonWhite />
        </View>

        <View style={styles.nicoContainerMaker}>
          <Image
            style={styles.nicoContainerImage}
            source={require("../assets/images/maker.png")}
          />
          <Text style={styles.nicoContainerTitle}>MakerDao CDP</Text>
          <Text style={styles.nicoContainerSubtitle}>
            Supply liquidity to Fulcrum and start earning annual interest now!
          </Text>
        </View>

        <View style={styles.nicoContainerFulcrum}>
          <Image
            style={styles.nicoContainerImage}
            source={require("../assets/images/fulcrum.png")}
          />
          <Text style={styles.nicoContainerTitle}>Fulcrum</Text>
          <Text style={styles.nicoContainerSubtitle}>
            Supply liquidity to Fulcrum and start earning annual interest now!
          </Text>
        </View>

        <View style={styles.nicoContainerDydx}>
          <Image
            style={styles.nicoContainerImage}
            source={require("../assets/images/Dydx.png")}
          />
          <Text style={styles.nicoContainerTitle}>MakerDao CDP</Text>
          <Text style={styles.nicoContainerSubtitle}>
            Supply liquidity to Fulcrum and start earning annual interest now!
          </Text>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}></View>
    </View>
    
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0
  },

  nicoContainerCompound: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    textAlign: "center",
    backgroundColor: "#1b2220",
    height: 230,
    padding: 20,
    overflow: "hidden",
    borderRadius: 8,
    marginTop: 4
  },

  nicoContainerFulcrum: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    textAlign: "center",
    backgroundColor: "#314649",
    height: 150,
    padding: 20,
    overflow: "hidden",
    borderRadius: 8,
    marginTop: 4
  },

  nicoContainerMaker: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    textAlign: "center",
    backgroundColor: "#1b2220",
    height: 150,
    padding: 20,
    overflow: "hidden",
    borderRadius: 8,
    marginTop: 4
  },

  nicoContainerDydx: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    textAlign: "center",
    backgroundColor: "#242424",
    height: 150,
    padding: 20,
    overflow: "hidden",
    borderRadius: 8,
    marginTop: 4
  },

  nicoContainerTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontFamily: "Rubik-Medium"
  },

  nicoContainerSubtitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    fontFamily: "Rubik-Light"
  },

  nicoContainerImage: {
    height: 40,
    resizeMode: "contain",
    marginTop: 3,
    marginBottom: 3
  },

  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },

  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  }
});
