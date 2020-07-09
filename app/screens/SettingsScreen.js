import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Header, Left, Icon, Body, Button } from "native-base";

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon type="FontAwesome" name="arrow-left" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>Settings</Text>
          </Body>
        </Header>

        <View style={styles.container}>
          <Text>SettingsScreen</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: "#fff",
    letterSpacing: 3,
  },
});
