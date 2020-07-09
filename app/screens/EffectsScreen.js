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
  };
  EffectChanged = (value) => {
    this.setState({ effectValue: value });
    console.log(this.state.effectValue);
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
              { label: "Lighter", value: "Lighter" },
              { label: "all_hue", value: "all_hue" },
              { label: "randomColors", value: "randomColors" },
              { label: "Raonbow", value: "Raonbow" },
              { label: "sparkles", value: "sparkles" },
              { label: "Fire", value: "Fire" },
              { label: "twinkle", value: "twinkle" },
              { label: "theaterChase", value: "theaterChase" },
              { label: "theaterChaseRainbow", value: "theaterChaseRainbow" },
              { label: "SnowSparkle", value: "SnowSparkle" },
              { label: "twinkleRandom", value: "twinkleRandom" },
              { label: "rainbow_butterfly", value: "rainbow_butterfly" },
            ]}
          />
        </View>

        <View style={styles.slidersContainer}>
          <View>
            <Text>Speed</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              // disabled={!this.state.isStripOn}
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={this.state.speedValue}
              // onValueChange={(value) => this.BrightnessChanged(value)}
            />
          </View>
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
  },
});
