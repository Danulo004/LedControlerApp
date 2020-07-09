import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import { Container } from "native-base";
import { List, Caption, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import {
  SliderHuePicker,
  SliderSaturationPicker,
  SliderValuePicker,
} from "react-native-slider-color-picker";
import Colors from "../styles/colors";

export default class HomeScreen extends Component {
  state = {
    isStripOn: false,
    brightness: 125,
    hueColor: "5",
    speed: 20,
  };
  OnOffStrip = () => {
    this.setState({ isStripOn: !this.state.isStripOn });
  };
  BrightnessChanged = (value) => {
    this.setState({ brightness: value });
    console.log(value);
    fetch(`http://192.168.0.183/params?brightness=${value}`);
  };
  HueColorChanged = (value) => {
    this.setState({ hueColor: value });
    console.log(value);
  };
  SpeedChanged = (value) => {
    this.setState({ speed: value });
    console.log(value);
  };

  render() {
    return (
      <Container>
        <Header {...this.props} />
        <View style={styles.onOffCont}>
          <View>
            <TouchableOpacity onPress={this.OnOffStrip}>
              <Icon
                name={
                  this.state.isStripOn ? "toggle-switch" : "toggle-switch-off"
                }
                color={this.state.isStripOn ? "#f55" : "#517fa4"}
                size={70}
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Brightness {this.state.brightness}</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              disabled={!this.state.isStripOn}
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={this.state.brightness}
              // minimumTrackTintColor="#f55"
              // maximumTrackTintColor="#517fa4"
              onValueChange={(value) => this.BrightnessChanged(value)}
            />
          </View>
        </View>

        <View style={styles.hueContainer}>
          <View>
            <Text>Solid strip color</Text>
          </View>
          <SliderHuePicker
            // oldColor={this.state.hueColor}
            trackStyle={[{ height: 12 }]}
            onColorChange={(value) => this.HueColorChanged(value)}
          />
        </View>

        <View style={styles.accordion}>
          <List.Accordion title="Sine function">
            <View>
              <Caption>
                Here you can turn on and adjust the speed of wave function
              </Caption>
            </View>
            <View style={styles.hueSpeedContainer}>
              <Text>Speed of HUE {this.state.speed}</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                disabled={!this.state.isStripOn}
                minimumValue={0}
                maximumValue={300}
                step={1}
                value={this.state.speed}
                onValueChange={(value) => this.SpeedChanged(value)}
              />
            </View>
          </List.Accordion>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  onOffCont: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  hueContainer: {
    height: 80,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  accordion: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  hueSpeedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
  },
});
