import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Icon,
  Body,
  Right,
  Button,
} from "native-base";

export default function (props) {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => {
            props.navigation.openDrawer();
          }}
        >
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Text style={styles.title}>
          {props.headerTitle ? props.headerTitle : "LedControl"}
        </Text>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => {
            props.navigation.navigate("Settings");
          }}
        >
          <Icon name="settings" />
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#fff",
    letterSpacing: 3,
  },
});
