import React from "react";
import { List } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

class AccordionComponent extends React.Component {
  state = {
    expanded: true
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <List.Section style={styles.AccordionSection}>
        <List.Accordion
          style={styles.AccordionElement}
          left={props => <Text style={styles.Title}>What is Compound?</Text>}
          onPress={this._handlePress}
        >
          <Text style={styles.Content}>
            Compound is a transparent, autonomous money market— allowing users &
            applications to frictionlessly earn interest or borrow Ethereum
            assets without relying on a counterparty.
          </Text>
        </List.Accordion>

        <List.Accordion
          style={styles.AccordionElement}
          left={props => <Text style={styles.Title}>How does it work?</Text>}
          onPress={this._handlePress}
        >
          <Text style={styles.Content}>
            Compound is the first “liquidity pool” — instead of lending assets
            directly to another user, you supply liquidity to a market, and
            users borrow from that market.
          </Text>
          <Text style={styles.Content}>
            In each market, interest rates are determined algorithmically (based
            on supply and demand), and interest accrues every Ethereum block.
          </Text>
          <Text style={styles.Content}>
            There are no pre-defined durations or terms (such as “90 days”) —
            you can use the Compound protocol for as short as one block, or as
            long as you’d like; you’re free to withdraw or repay at any time.
          </Text>
        </List.Accordion>

        <List.Accordion
          style={styles.AccordionElement}
          left={props => (
            <Text style={styles.Title}>How are interest rates set?</Text>
          )}
          onPress={this._handlePress}
        >
          <Text style={styles.Content}>
            Interest rates are a function of the liquidity available in each
            market, and fluctuate in real-time based on supply and demand. When
            liquidity is plentiful, interest rates are low. As liquidity becomes
            scarce, interest rates increase, incentivizing new supply and the
            repayment of borrowing.
          </Text>
          <Text style={styles.Content}>
            You aren’t locked into an interest rate — expect it to change
            frequently.{" "}
          </Text>
        </List.Accordion>

        <List.Accordion
          style={styles.AccordionElement}
          left={props => (
            <Text style={styles.Title}>How are they calculated?</Text>
          )}
          onPress={this._handlePress}
        >
          <Text style={styles.Content}>
            The interest rates you see in the Interface are quoted as annual
            interest rates. Interest accrues each Ethereum block; every ~15
            seconds, your balance will increase by (1/2102400) of the quoted
            interest rate. Really!{" "}
          </Text>
        </List.Accordion>

        <List.Accordion
          style={styles.AccordionElement}
          left={props => (
            <Text style={styles.Title}>Is it safe?</Text>
          )}
          onPress={this._handlePress}
        >
          <Text style={styles.Content}>
          The security of the Compound protocol is our highest priority; our development team, alongside third-party auditors and consultants, has invested considerable effort to create a protocol that we believe is safe and dependable. All contract code and balances are publicly verifiable, and security researchers are eligible for a bug bounty for reporting undiscovered vulnerabilities.
          </Text>
        </List.Accordion>


      </List.Section>
    );
  }
}

const styles = StyleSheet.create({
  AccordionSection: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: 6,
    marginTop: 4,
    paddingHorizontal: 0,
    paddingVertical: 0
  },

  AccordionElement: {
    flex: 1,
    marginHorizontal: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    marginTop: 4,
    paddingLeft: 17,
    paddingRight: 7,
    marginLeft: 0,
    backgroundColor: "#f2f2f2"
  },

  Title: {
    color: "#000",
    fontFamily: "Rubik-Bold",
    fontSize: 17,
    marginHorizontal: 0,
    padding: 0,
    marginLeft: 0
  },

  Content: {
    color: "#000",
    fontFamily: "Rubik-Light",
    fontSize: 14,
    padding: 0,
    marginLeft: -60,
    marginTop: 10,
    marginBottom: 5
  }
});

export default AccordionComponent;
