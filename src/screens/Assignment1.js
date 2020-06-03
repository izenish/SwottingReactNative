import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Assignment1 = () => {
  const row2 = "My name is Jenish";
  return (
    <View>
      <Text style={styles.CSS1}>Getting started with react native! </Text>
      <Text style={styles.CSS2}> {row2} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  CSS1: { fontSize: 45 },
  CSS2: { fontSize: 20 },
});
export default Assignment1;
