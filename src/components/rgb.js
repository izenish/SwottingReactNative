import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorComponent = ({ color, onIncrement, onDecrement }) => {
  // not using {props} and using {color} because we only have to deal with color dont need the entire property
  return (
    <View>
      <Text>{color}</Text>
      {/* usign back ticks `` because we are doing string interpolation not "" */}
      <Button
        type="outline"
        title={`Increase ${color}`}
        onPress={() => onIncrement()}
      />
      <Button
        type="outline"
        title={`Decrease ${color}`}
        onPress={() => onDecrement()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ColorComponent;
