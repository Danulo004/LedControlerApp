import React, { Component } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";

import {
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isStripOn, setIsStripOn] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const toggleOnOffStrip = () => {
    setIsStripOn(!isStripOn);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.header}>
            <Icon name="lightbulb-on-outline" color="#393" size={50} />

            <View style={{ marginLeft: 20 }}>
              <Title style={styles.title}>LedStripApp</Title>
              <Caption style={styles.caption}>
                It's an app for controling a WS2812b led strips
              </Caption>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="chart-bubble" color={color} size={size} />
              )}
              label="Effects"
              onPress={() => {
                props.navigation.navigate("Effects");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="music-circle" color={color} size={size} />
                // waveform
              )}
              label="Music"
              onPress={() => {
                props.navigation.navigate("Music");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="blur" color={color} size={size} />
                // gradient
              )}
              label="Palletes"
              onPress={() => {
                props.navigation.navigate("Palletes");
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={toggleOnOffStrip}>
              <View style={styles.preference}>
                <Text style={{ fontWeight: "bold" }}>On/Off</Text>
                <View>
                  <Switch value={isStripOn} />
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={toggleTheme}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View>
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  header: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#333",
  },
  caption: {
    width: "60%",
    fontSize: 12,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
