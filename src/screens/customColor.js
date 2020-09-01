import React, { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import ColorComponent from "../components/rgb";

const customColor = function () {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //color==="red","green","blue"
    //change==+15,-15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0
          ? null && console.log("outofboubds")
          : setRed(red + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);

      default:
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
    }
  };
  return (
    <View>
      <ColorComponent
        color="Red"
        onIncrement={() => setColor("red", 10)}
        onDecrement={() => setColor("red", -10)}
      />
      <ColorComponent
        color="Green"
        onIncrement={() => setColor("green", 10)}
        onDecrement={() => setColor("green", -10)}
      />
      <ColorComponent
        color="Blue"
        onIncrement={() => setColor("blue", 10)}
        onDecrement={() => setColor("blue", -10)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default customColor;
