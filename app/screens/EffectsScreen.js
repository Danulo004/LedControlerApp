import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Container } from "native-base";
import { Title } from "react-native-paper";
import Slider from "@react-native-community/slider";
import RNPickerSelect from "react-native-picker-select";
import Colors from "../styles/colors";

export default class EffectsScreen extends Component {
  state = {
    effectValue: null,
    speedValue: 5,
    scaleValue: 10,
  };
  EffectChanged = (value) => {
    console.log(value);
    this.setState({ effectValue: value });
    fetch(`http://192.168.0.183/params?effect=${value}`).catch((err) => {
      console.log(err);
    });
  };
  SpeedChanged = (value) => {
    this.setState({ speedValue: value });
    Controller.setSpeed(value);
  };
  ScaleChanged = (value) => {
    this.setState({ scaleValue: value });
    Controller.setScale(value);
  };

  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Title>Here you can select differrent effects</Title>
        <Text>EffectsScreen</Text>
        <View style={styles.effectsContainer}>
          <RNPickerSelect
            onValueChange={(value) => this.EffectChanged(value)}
            items={[
              { label: "Lighter", value: 0 },
              { label: "randomColors", value: 1 },
              { label: "Raonbow", value: 2 },
              { label: "sparkles", value: 3 },
              { label: "Fire", value: 4 },
              { label: "random_lights", value: 5 },
              { label: "twinkle", value: 6 },
              { label: "theaterChase", value: 7 },
              { label: "theaterChaseRainbow", value: 8 },
              // { label: "SnowSparkle", value: "SnowSparkle" },
              { label: "twinkleRandom", value: 9 },
              { label: "rainbow_butterfly", value: 10 },
            ]}
          />
        </View>

        <View style={styles.slidersContainer}>
          <Text>Speed</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            disabled={this.state.effectValue == null}
            minimumValue={0}
            maximumValue={300}
            step={1}
            value={this.state.speedValue}
            onValueChange={(value) => this.SpeedChanged(value)}
          />
          <Text>{this.state.speedValue}</Text>
        </View>
        <View style={styles.slidersContainer}>
          <Text>Scale</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            disabled={this.state.effectValue == null}
            minimumValue={0}
            maximumValue={300}
            step={1}
            value={this.state.scaleValue}
            onValueChange={(value) => this.ScaleChanged(value)}
          />
          <Text>{this.state.scaleValue}</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  effectsContainer: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  slidersContainer: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "space-around",
  },
});
