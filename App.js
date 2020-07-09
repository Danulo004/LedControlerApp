import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerContent from "./app/components/DrawerContent";

import HomeScreen from "./app/screens/HomeScreen";
import MusicScreen from "./app/screens/MusicScreen";
import EffectsScreen from "./app/screens/EffectsScreen";
import PalletesScreen from "./app/screens/PalletesScreen";
import SettingsScreen from "./app/screens/SettingsScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
  createMusicStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Music" component={MusicScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
  createEffectsStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Effects" component={EffectsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
  createPalletesStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Palletes" component={PalletesScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Music" children={this.createMusicStack} />
          <Drawer.Screen name="Effects" children={this.createEffectsStack} />
          <Drawer.Screen name="Palletes" children={this.createPalletesStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
