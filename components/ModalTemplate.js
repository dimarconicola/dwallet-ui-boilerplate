import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Image
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class ModalTemplate extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.view}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          presentationStyle="fullScreen"
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modal}>



            <TouchableHighlight
                    style={styles.close}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                                  <Image
                                  style={styles.closeimage}
                                  source={require("../assets/images/close.png")}
                                />
                  </TouchableHighlight>

              <ScrollView>
                <View style={styles.contenuto}>
              <Image
                style={styles.image}
                source={require("../assets/images/gas.png")}
              />
                <Text style={styles.text}>
                  Ethereum Gas is a unit that measures the amount of
                  computational effort that it will take to execute certain
                  operations.
                </Text>
                <Text style={styles.text}>
                  Every single operation that takes part in Ethereum, be it a
                  transaction or smart contract execution requires some amount
                  of gas.
                </Text>
                <Text style={styles.text}>
                  Miners get paid an amount in Ether which is equivalent to the
                  total amount of gas it took them to execute a complete
                  operation.
                </Text>
                </View>
              </ScrollView>
              </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  view: {
    flex: 1,
  },

  modal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
  },


  contenuto: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  text: {
    textAlign: "center",
    flexWrap: 'wrap',
    marginTop: 10,
    color: "#000",
    fontSize: 18,
    fontFamily: "Rubik-Light"
  },

  close: {
    flex: 1,
  flexDirection: "row-reverse",
  marginTop: 0,
  },

  closetext: {
    textAlign: "right"
  },

  image: {
    alignSelf: 'center',
    height: 320,
    resizeMode: 'contain',
    margin: 0,
    padding: 0,
  },

  closeimage: {
    width: 30,
    resizeMode: 'contain',
    marginTop: 0,
  }
});
