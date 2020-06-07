import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const listExercise = () => {
  const arraye = [
    { count: "Friend1", age: "20" },
    { count: "Friend2", age: "45" },
    { count: "Friend3", age: "35" },
    { count: "Friend4", age: "32" },
    { count: "Friend5", age: "27" },
    { count: "Friend6", age: "53" },
    { count: "Friend7", age: "30" },
  ];
  return (
    <FlatList
      keyExtractor={(uniqueKey) => uniqueKey.count}
      data={arraye}
      renderItem={({ item }) => {
        return (
          <Text style={css.gap}>
            {item.count}-Age{item.age}{" "}
          </Text>
        );
      }}
    />
  );
};
const css = StyleSheet.create({
  gap: {
    marginVertical: 50,
  },
});

export default listExercise;
