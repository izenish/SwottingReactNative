import React, { useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  //[] inside the useState because we want it to be an empty array
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      ></Button>

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;
