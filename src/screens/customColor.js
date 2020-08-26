import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorComponent from "../components/rgb";

const customColor = function () {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorComponent
        color="Red"
        onIncrement={() => setRed(red + 10)}
        onDecrement={() => setRed(red - 10)}
      />
      <ColorComponent
        color="Green"
        onIncrement={() => setGreen(green + 10)}
        onDecrement={() => setGreen(green - 10)}
      />
      <ColorComponent
        color="Blue"
        onIncrement={() => setBlue(blue + 10)}
        onDecrement={() => setBlue(blue - 10)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default customColor;
